import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemDetail } from "../redux/actions";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemID);
  }

  render() {
    const { item } = this.props;
    const itemName = `${item.name}`;
    return (
      <div className="author">
        <div>
          <h3>{itemName}</h3>
          <img
            src={item.picture}
            className="img-thumbnail img-fluid"
            alt={itemName}
          />
          <h4>{item.quantity}</h4>
          <small className="card-text">{item.discription}</small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.rootItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (itemID) => dispatch(fetchItemDetail(itemID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
