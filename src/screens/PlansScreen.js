import React, { useEffect, useState } from 'react'
import db from '../firebase';
import "./PlansScreen.css"
import { useSelector } from 'react-redux';
import  {selectUser} from "../features/userSlice"
import { loadStripe } from "@stripe/stripe-js"
import { useHistory } from 'react-router-dom';

function PlansScreen() {
const [products, setProducts] = useState([]);
const user = useSelector(selectUser);
const [subscription, setSubscription] = useState(null);
const history = useHistory()


useEffect(() => {
    db.collection('customers')
    .doc(user.uid)
    .collection('subscriptions')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(async subscription =>{
            setSubscription({
                role: subscription.data().role,
                current_period_end: subscription.data().current_period_end.seconds,
                current_period_start: subscription.data().current_period_start.seconds,
            })
        })
    })
})

useEffect(() => {
    db.collection("products")
     .where("active","==", true)
     .get()
     .then((querySnapshot) => {
         const products = {};
         querySnapshot.forEach(async productDoc =>{
             products[productDoc.id] = productDoc.data();
             const priceSnap = await productDoc.ref.collection("prices").get();
             priceSnap.docs.forEach(price =>{
                 products[productDoc.id].prices = {
                     priceId: price.id,
                     priceData: price.data()
                 }
             })
         });
         setProducts(products)
     });

}, []);

console.log(products);
console.log(subscription)

const loadCheckout = async (priceId) => {
    const docRef = await db
    .collection("customers")
    .doc(user.uid)
    .collection("checkout_sessions")
    .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    });

    docRef.onSnapshot(async (snap) => {
        const {error, sessionId } = snap.data();

        if (error) {
            //show an error to your customer and
            //inspect your cloud funtion logs in the firebase console.

            alert(`An error occured: ${error.message}`);
        }

        if (sessionId) {
            //we have a session, lets redirect to checkout
            //init stripe

            const stripe = await loadStripe(
                "pk_test_51JAG7cSBic7dNMmDtn4FZyuszppmMBat3ky1i8m6OI6MA8HFRmTNak9RwV18XZzBJzaSggroeci5kfzbOK40jrpR00B5oS2R6n"
            );
            stripe.redirectToCheckout({sessionId})


        }
    })

};

    return (
        <div className="plansScreen">
            <br />
            {subscription && <p>Renewal date : {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
           {Object.entries(products).map(([productId, productData]) =>{
               //TODO: add some logic to check if the user's subscription is active...

               const isCurrentPackage = productData.name
               ?.includes(subscription?.role)
                // if(isCurrentPackage){
                //     history.push("/")
                // }

               return(
                   <div 
                   key={productId}
                   className={`${ isCurrentPackage && "plansScreen__plans--disabled"}
                   plansScreen__plans`}>
                       <div className="plansScreen__info">
                           <h5>{productData.name}</h5>
                           <h6>{productData.description}</h6>
                       </div>
                       <button onClick={() => 
                       ( !isCurrentPackage && loadCheckout(productData.prices.priceId)) ||
                       (isCurrentPackage && history.push("/"))
                    }
                        
                        > 
                       {isCurrentPackage ? "Play" :"Subscribe"}
                       </button>
                   </div>
               )

           })} 
            
        </div>
    )
}

export default PlansScreen 
