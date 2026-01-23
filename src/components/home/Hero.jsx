import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tagline">NEW COLLECTION</span>
        <h1>
          Elevate Your <br /> Everyday Style
        </h1>
        <p>
          Discover premium men's fashion — hoodies, t-shirts, and shirts
          crafted for comfort and confidence.
        </p>
        <Link to="/shop" className="hero-btn">
          SHOP NOW
        </Link>
      </div>
    </section>

  );
}

export default Hero;
