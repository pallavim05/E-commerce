import React from "react";
import Hero from "../Componets/Hero/Hero";
import Popular from "../Componets/Popular/Popular";
import Offers from "../Componets/Offers/Offers";
import NewCollection from "../Componets/NewCollections/NewCollections";
import NewLetter from "../Componets/NewsLetter/NewsLetter";
import Footer from "../Componets/Footer/Footer";
const Shop = () =>
{
    return(
        <div>
          <Hero/> 
          <Popular/>
          <Offers/>
          <NewCollection/>
          <NewLetter/>
        

        </div>
    )
}
export default Shop