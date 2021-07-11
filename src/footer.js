import React from 'react'
import "./footer.css"

function FooterBar() {
    return (
        
        <div role="contentinfo" className="footerbar">
            {/* <div className="footerbar__content"> */}
           
< div className="footer"/>
          <div  className="footerbar__infos">
          {/* <h2>Made by Sakshi</h2> */}
            <ul  className="footerbar__infos__list">
                <li className="footerbar__infos__list__link" >Privacy Police</li>
                <li className="footerbar__infos__list__link">
                    <a href="https://en.wikipedia.org/wiki/Netflix"> About NetFlix</a>
                   </li>
                <li className="footerbar__infos__list__link">Terms of Uses</li>
            
                <li className="footerbar__infos__list__link">
                    <a href="https://www.themoviedb.org/">APIs Used</a>
                    </li>
                <li className="footerbar__infos__list__link">
                    <a href="https://stripe.com/en-in">  Stripe Payment Infos</a>
                    </li>
                <li className="footerbar__infos__list__link">
                    <a href="https://github.com/Sakshi2830/Netflix_Clone">Souce Code</a>
                    </li>
                <li className="footerbar__infos__list__link">
                    <a href="https://www.linkedin.com/in/sakshi-tripathi-49626a1a1/">Linked IN</a>
                    </li>
             
                <li className="footerbar__infos__list__link">
                    <a href="https://github.com/Sakshi2830">GitHub</a>
                    </li>

            </ul>
        </div>
        <footer>
            <h3>Made by Sakshi with ❤️</h3>
        </footer>
         </div>
        // </div>
        

    )
}

export default FooterBar
