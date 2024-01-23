import "./styles.css";
import cross from "./cross.png"
import handshake from "./handshake.gif"
import idea from "./idea.gif"
import search from "./search.gif"

export function Product() {
  return (
  <div className="productContainer">
    <header id="header">
      <nav id="nav-bar">
         <ul className="flex-header-container">
            <li className="flex-item logo">
               <img id="header-img" src={cross} />
               <h1 id="header-brand"><span id="horton">HORTON</span><span id="digital">DIGITAL</span></h1>
            </li>
            <li className="flex-item"><a className="nav-link" href="#features">Features</a></li>
            <li className="flex-item"><a className="nav-link" href="#how-it-works">How It Works</a></li>
            <li className="flex-item"><a className="nav-link" href="#pricing">Pricing</a></li>
         </ul>
      </nav>
   </header>
   <section id="hero">
      <h1 id="who">WORLD'S BEST WEB DESIGN</h1>
      <h1 id="shout">Free Custom Mockup</h1>
      <form id="form" action="https://www.freecodecamp.com/email-submit">
         <input id="email" name="email" type="email" placeholder="Enter your email address." />
         <input id="submit" type="submit" value="LET'S GO!" />
      </form>
   </section>
   <section id="features">
      <h2>We are a Website Design Firm in Woodstock, Georgia <br /> Serving Small Businesses Locally and Beyond!</h2>
      <div className="flex-container">
         <div className="flex-item icon">
            <a href="https://www.flaticon.com/free-animated-icons/idea" title="idea animated icons" target="_blank">
               <img className="gif" src={idea} /></a>
         </div>
         <div className="flex-item desc">
            <h4>Non-Disclosure Agreement</h4>
            <p>Bring your ideas to life with peace of mind! </p>
         </div>
      </div>
      <div className="flex-container">
         <div className="flex-item icon">
            <a href="https://www.flaticon.com/free-animated-icons/magnifying-glass"
               title="magnifying glass animated icons" target="_blank">
               <img className="gif" src={search} /></a>
         </div>
         <div className="flex-item desc">
            <h4>Search Engine Optimization</h4>
            <p>Have your site rank well on Google! </p>
         </div>
      </div>
      <div className="flex-container">
         <div className="flex-item icon">
            <a href="https://www.flaticon.com/free-animated-icons/deal" title="deal animated icons" target="_blank">
               <img className="gif" src={handshake} /></a>
         </div>
         <div className="flex-item desc">
            <h4>30 Days Money Back Guarantee</h4>
            <p>Not satisfied? Recieve a full refund!</p>
         </div>
      </div>
   </section>
   <section id="how-it-works">
      <iframe id="video" height="315" src="https://www.youtube.com/embed/EpvOIaHyTXE" allowFullScreen=""></iframe>
   </section>
   <section id="pricing">
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
   </section>
   <footer>
      <ul className="footer">
         <li>Privacy</li>
         <li>Terms</li>
         <li>Contact</li>
      </ul>
      <p>Copyright 2023, Horton Digital</p>
   </footer>
  </div>
  );
}
