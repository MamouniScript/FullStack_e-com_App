import { useEffect, useState, useNavigate } from "react";
import { getProductById,getAllProducts,addProduct, updateProduct } from "../services/product.services";
import { useParams } from 'react-router';

export function ProductEdit(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(async ()=>{
        fetchProducts();
    },[]);

    async function fetchProducts(){
        const res = await getProductById(id);
        const prdct = res.data;
        setName(prdct.name)
        setPrice(prdct.price)
    }

    function handlForm(event){
        event.preventDefault();
        const prdct = {"name":name, "price":price}
        updateProduct(prdct);
        navigate("/products");
    }
    return (
        <form onSubmit={(e)=>handlForm(e)}>
            <label htmlFor="name">Nom</label><br/>
            <input type='text' name='name' id='name' value ={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label htmlFor="price">Prix</label><br/>
            <input type='number' name='price' id='price' value ={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br/>
            <input type='submit' value={"Enregistrer"}/>
        </form>
    );
}