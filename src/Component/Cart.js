import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import { checkout, login } from "../redux/actions";
class Cart extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.items.forEach((item) => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(2);
  };
  render() {
    const getOrderItem = this.props.items.map((item) => (
      <CartCard key={item.name} orderItem={item} />
    ));

    return (
      <>
        <br />
        <section id="overlay" className="single-section">
          <h1 id="my-cart" className="mt-5">
            My Cart
          </h1>
        </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrderItem}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>{this.totalPrice()} JOD</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2 mt-5">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/clotheslist">
                    <button className="btn btn-lg btn-secondary rounded-pill">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  {this.props.user ? (
                    <button
                      className="btn btn-lg btn-outline-success rounded-pill"
                      onClick={() => this.props.checkout()}
                    >
                      Proceed to checkout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="btn btn-lg btn-outline-success rounded-pill">
                        Login to checkout
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    items: state.cart.order,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    checkout: () => dispatch(checkout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
