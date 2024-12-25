import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className="hero">
            {/* Left Section */}
            <div className="hero-left">
                <h1>NEW ARRIVALS ONLY</h1>
                <div className="hero-collection">
                    <div className="hand-icon">
                        <div className="new-with-icon">
                            <p>new</p>
                            <img src={hand_icon} alt="Hand Icon" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <img src={hero_image} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
