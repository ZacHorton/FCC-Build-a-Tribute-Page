import "./styles.css";

export function Product() {
  return (
  <div className="productContainer">
    <header id="header">
      <nav id="nav-bar">
         <ul className="flex-header-container">
            <li className="logo">
            <a href="#hero">
               <img id="header-img" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Christian_Cross_icon.svg" />
               {/* <img id="header-img" src={cross} /> */}
               <h1 id="header-brand"><span id="horton">HORTON</span><span id="digital">DIGITAL</span></h1>
               </a>
            </li>
            <li><a className="nav-link" href="#features">Features</a></li>
            <li><a className="nav-link" href="#how-it-works">How It Works</a></li>
            <li><a className="nav-link" href="#pricing">Pricing</a></li>
         </ul>
      </nav>
   </header>
   <section id="hero">
      <div>
         <h1 id="who">WORLD'S BEST WEB DESIGN</h1>
         <h1 id="shout">Free Custom Mockup</h1>
         <form id="form" action="https://www.freecodecamp.com/email-submit">
            <input id="email" name="email" type="email" placeholder="Enter your email address." autoComplete="email"/>
            <input id="submit" type="submit" value="LET'S GO!" />
         </form>
      </div>
   </section>
   
   <section id="features">
      <div>
         <div>
            <h2 id="features-heading">We are <span className="highlight">Web Experts</span><br />Ready to <span className="highlight-2">Serve Your Business!</span></h2>
            
            <div className="flex-container">
                  <i className="fa-solid fa-pen-to-square fa-xl"></i>
               <div className="desc">
                  <h4>Non-Disclosure Agreement</h4>
                  <p>Bring your ideas to life with peace of mind! </p>
               </div>
            </div>
         </div>

         <div className="flex-container">
            <i className="fa-solid fa-globe fa-xl highlight"></i>
            <div className="desc">
               <h4>Search Engine Optimization</h4>
               <p>Have your site rank well on Google!</p>
            </div>
      </div>

      <div className="flex-container">
            <i className="fa-solid fa-handshake fa-xl"></i>
         <div className="desc">
            <h4>30 Days Money Back Guarantee</h4>
            <p>Not satisfied? Recieve a full refund!</p>
         </div>
      </div>
      </div>
   </section>

   <section id="how-it-works">
       <iframe id="video" src="https://www.youtube.com/embed/EpvOIaHyTXE" width="960" height="540" sandbox="allow-scripts allow-same-origin allow-presentation" allowFullScreen></iframe>  
   </section>

   <section id="pricing">
      <div className="products">
         <div className="product">
            <h3>Basic</h3>
            <h4>$1000</h4>
            <p>1 Page Templates</p>
            <p>10 Pages</p>
            <p>-</p>
            <p>-</p>
            <button>Select</button>
         </div>
         <div className="product">
            <h3>Special</h3>
            <h4>$3000</h4>
            <p>3 Page Templates</p>
            <p>10-20 Pages</p>
            <p>Unique Functionality</p>
            <p>-</p>
            <button>Select</button>
         </div>
         <div className="product">
            <h3>Custom</h3>
            <h4>$5000</h4>
            <p>5 Page Templates</p>
            <p>20-30 Pages</p>
            <p>Unique Functionality</p>
            <p>Payment Processing</p>
            <button>Select</button>
         </div>
      </div>

      <footer>
         <ul className="footer">
            <li><a href="#hero">Privacy</a></li>
            <li><a href="#hero">Terms</a></li>
            <li><a href="#hero">Contact</a></li>
         </ul>
         <p>Copyright 2024, Horton Digital</p>
      </footer>
   </section>

  </div>
  );
}
