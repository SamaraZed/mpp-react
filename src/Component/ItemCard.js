import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

const ItemCard = ({ item, add }) => (
  <div className="card col-4 text-center mx-auto" style={{ margin: "3px" }}>
    <div className="image ">
      <img
        className="card-img-top  "
        style={{ height: 150, width: 150 }}
        src={item.picture}
        alt={item.name}
      />
    </div>
    <div className="card-body">
      <h5 className="card-title">
        <span>{item.name}</span>
      </h5>
      <p className="card-text">
        <span>{item.price} JOD</span>
        <p className="card-description">{item.discription}</p>
        <p className="card-text">{item.quantity} left in the stock</p>
      </p>
      <button className="btn btn-primary" onClick={() => add(item)}>
        Add to Cart
      </button>
    </div>
  </div>
);
const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(ItemCard);
