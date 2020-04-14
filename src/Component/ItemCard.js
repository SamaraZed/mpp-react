import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => (
  <div className="card col-4 " style={{ width: "10rem" }}>
    {/* <Link to={`/items/${item.id}`} className="card"> */}
    <div className="image center" style={{ width: "10rem" }}>
      <img className="card-img-top " src={item.picture} alt={item.name} />
    </div>
    <div className="card-body">
      <h5 className="card-title">
        <span>{item.name}</span>
      </h5>
      <p class="card-text">
        <span>{item.price} JOD</span>
        <p className="card-description">{item.discription}</p>
        <p class="card-text">{item.quantity} left in the stock</p>
      </p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
    {/* </Link> */}
  </div>
);

export default ItemCard;
