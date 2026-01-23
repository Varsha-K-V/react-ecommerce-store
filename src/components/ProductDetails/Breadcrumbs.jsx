import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

function Breadcrumbs ({category,title}){
    return(
        <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>

            <Link to="/shop">Shop</Link>
            <span>/</span>

            {category && (
                <>
                 <span className="breadcrumb-category">{category}</span>
                 <span>/</span>
                </>
                )}

                 <span className="breadcrumb-current">{title}</span>
        </nav>
    );
}
export default Breadcrumbs;
