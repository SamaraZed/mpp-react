import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import OrderCard from "./OrderCard";
import { Redirect } from "react-router-dom";

class Order extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/" />;

    const orderCards = this.props.orders.map((order) => (
      <OrderCard key={order.name + order.id} order={order} />
    ));

    return (
      <div className="items">
        <br />
        <br />
        <br />
        <div className="row">{orderCards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    orders: state.cart.oldOrders,
  };
};

export default connect(mapStateToProps)(Order);
