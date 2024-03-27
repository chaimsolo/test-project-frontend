import { nanoid } from "nanoid";
import "./productGrid.css";
import { useState } from "react";
import "../../reset.css";



export default function ProductsGrid({ products }) {

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(0);
    const [sortByPrice, setSortByPrice] = useState(0);

    function sortProducts(a, b) {
        switch (sortBy) {
            case 0: {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            }
            case 1: {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            }
            case 2: {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            }
            case 3: {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            }
            default:
                return;
        }
    }



    const productsToShow = products
        .filter((p) => p.title.includes(search))
        .sort(sortProducts)
        .map((speaker) => <GridItem key={nanoid()} item={speaker} />)



    return (
        <div className="grid-container">
            <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            <div className="row toolsBar">
                <select onChange={(e) => setSortBy(parseInt(e.target.value))}>
                    <option value={-1}>sort by title</option>
                    <option value={0}>asc by name</option>
                    <option value={1}>desc by name</option>
                    <option value={2}>asc by price</option>
                    <option value={3}>desc by price</option>
                </select>
            </div>
            <p>search value is: {search}</p>
            <div className="grid">
                {productsToShow}
            </div>
        </div>
    );
}

function GridItem({ item }) {
    return (
        <div className="grid-item">
            <img src={item.img} />
            <div>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
            </div>
        </div>
    );
}