import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext'; 
import dropdown_icon from '../Componets/Assets/dropdown_icon.png';
import Item from '../Componets/Items/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); 

  return (
    <div className="shopcategory-banner">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12</span> Out of 36 Products</p>

        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {  // Case corrected
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          }
          return null; 
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
