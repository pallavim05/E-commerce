import React from "react";
import './Items.css';
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <div className="item">
            {/* Corrected the template literal to use backticks */}
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0,0)}src={props.image} alt={props.name} />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-new-prices">
                    ${props.new_price}
                </div>
                <div className="item-old-prices">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Items;
