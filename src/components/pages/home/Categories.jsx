import { Link } from "react-router-dom";
import categorie1 from "../../../assets/category-1.jpg";
import categorie2 from "../../../assets/category-2.jpg";
import categorie3 from "../../../assets/category-3.jpg";
import categorie4 from "../../../assets/category-4.jpg";

const Categories = () => {
    const categories = [
        { name: 'Accessories', path: 'accessories', img: categorie1 },
        { name: 'Dress Collection', path: 'dress', img: categorie2 },
        { name: 'Jewellery', path: 'jewellery', img: categorie3 },
        { name: 'Cosmetics', path: 'cosmetics', img: categorie4 },
    ];

    return (
        <>
            <div className="product__grid">
                {
                    categories.map((categorie) => (
                        <Link className="categories__card" to={`/categories/${categorie.path}`} key={categorie.path}>
                            <img src={categorie.img} alt={categorie.name} />
                        <h4>{categorie.name}</h4>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default Categories;
