import { useState } from "react";
import { addProduct } from "../services/product.services";
import { func } from "prop-types";
import { useNavigate } from "react-router";

export function ProductAddForm(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()
    function handlForm(event){
        event.preventDefault();
        const prdct = {"name":name, "price":price}
        addProduct(prdct);
        navigate("/products");
    }
    return (
        <form onSubmit={(e)=>handlForm(e)}>
            <label htmlFor="name">Nom</label><br/>
            <input type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label htmlFor="price">Prix</label><br/>
            <input type='number' name='price' id='price' onChange={(e)=>setPrice(e.target.value)}/>
            <br/>
            <input type='submit' value={"Enregistrer"}/>
        </form>
    );
}