import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";
import { ProductEdit } from "./component_product_edit";

export function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchProducts();
    }, []);
    async function fetchProducts() {
      const res = await getAllProducts();
      setProducts(res.data);
    }

    async function deleteProduct(id) {
      const res = await deleteProductByID(id);
      fetchProducts();
    }

    return (
        <><table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((elem, index) => (
                    <tr key = {index}>
                        <td>{elem.name}</td>
                        <td>{elem.price}</td>
                        <td><button onClick={() => deleteProduct(elem._id)}></button></td>
                        <td><button onClick={() => ProductEdit(elem._id)}></button></td>
                        {/*<Link to={'/products/edit/${elem._id}'} > Modifier </Link>*/}
                    </tr>
                )
                )}
            </tbody>
        </table>
        <Link to={"/products/new"}>
                New Product
            </Link></>
    )
}