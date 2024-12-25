
import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Componets/Breadcrum/Breadcrum";
import ProductDisplay from "../Componets/ProductDisplay/ProductDisplay";
import DiscriptionBox from "../Componets/DiscriptionBox/DiscriptionBox";
import RelatedProducts from "../Componets/RelatedProducts/RelatedProducts";
const Product = () =>
{
    const{all_product} = useContext(ShopContext);
    const{productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
    return(
        <div>
            <Breadcrum product = {product}/>
            <ProductDisplay product = {product}/>
            <DiscriptionBox />
            <RelatedProducts/>

        </div>
    )
}
export default Product