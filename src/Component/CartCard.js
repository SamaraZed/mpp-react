import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { removeItem } from "../redux/actions";

class CartCard extends Component {
  handleClick = () => {
    this.props.removeItem(this.props.orderItem);
  };
  render() {
    return (
      <tr>
        <td>
          <img
            style={{ height: 50, width: 50 }}
            src={this.props.orderItem.picture}
            alt={this.props.orderItem.name}
          />
        </td>
        <td>{this.props.orderItem.name}</td>
        <td>{this.props.orderItem.quantity}</td>
        <td className="text-right">{this.props.orderItem.price}</td>
        <td className="text-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.handleClick()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (orderItem) => dispatch(removeItem(orderItem)),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
