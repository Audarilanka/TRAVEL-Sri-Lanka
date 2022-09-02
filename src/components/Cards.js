import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img18 from "../images/IMG_1838.jpg";
import beach from "../images/Tangalle.jpg";
import Hike from "../images/hike.jpg";
import temple from "../images/temple.jpg";
import Hikkaduwa from "../images/Hikkaduwa.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img18}
              text="Explore the hidden waterfalls deep inside the Sri Lanka"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={beach}
              text="Enjoy the beauty of the beautiful beach"
              label="Beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Hike}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Hiking"
              path="/services"
            />
            <CardItem
              src={temple}
              text="Experience the cultural diversity in Sri Lanka"
              label="Culture Places"
              path="/products"
            />
            <CardItem
              src={Hikkaduwa}
              text="Enjoy and explore the beautiful coral reefs of Sri Lanka.
              Coral reefs have been a valuable resource for Sri Lanka for centuries"
              label="Coral"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
