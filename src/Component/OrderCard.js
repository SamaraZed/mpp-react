import React from "react";

const OrderCard = ({ order }) => (
  <div className="card col-4 text-center mx-auto" style={{ margin: "3px" }}>
    {/* <div className="image ">
      <img
        className="card-img-top  "
        style={{ height: 150, width: 150 }}
        src={order.item.picture}
        alt={order.name}
      />
    </div> */}
    <div className="card-body">
      <h5 className="card-title">
        <span>{order.baskets[0].item.name}</span> <br />
        <span>{order.baskets[0].item.price} JOD</span>
      </h5>
      <p className="card-text">
        <span>{order.baskets.quantity} </span>
      </p>
    </div>
  </div>
);

export default OrderCard;
