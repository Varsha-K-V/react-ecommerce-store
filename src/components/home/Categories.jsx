import "./Categories.css";
import { useNavigate } from "react-router-dom";
import hoodieImg from "../../assets/images/hoodie.webp";
import tshirtImg from "../../assets/images/tshirt.avif";
import shirtImg from "../../assets/images/shirt.avif";
import jeansImg from "../../assets/images/jeans.webp";


const categories = [
  {
    id: 1,
    name: "Hoodies",
    image: hoodieImg,
  },
  {
    id: 2,
    name: "T-Shirts",
    image: tshirtImg,
  },
  {
    id: 3,
    name: "Shirts",
    image: shirtImg,
  },
  {
    id: 4,
    name: "Jeans",
    image: jeansImg,
  },
];

export default function Categories(){
    const navigate = useNavigate();

    return(
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="categories-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card"
                        onClick={() => navigate(`/shop?category=${cat.name.toLowerCase()}`)}
                        >
                            <img src={cat.image} alt={cat.name} />
                            <div className="category-name">{cat.name}</div>
                    </div>
                    ))}
            </div>

        </section>
    )
}
