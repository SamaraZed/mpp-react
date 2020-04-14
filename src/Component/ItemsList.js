import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";

class ItemsList extends Component {
  state = {
    query: "",
  };

  setQeury = (query) => this.setState({ query });

  filterItems = () => {
    const query = this.state.query.toLowerCase();
    return this.props.items.filter((item) => {
      return `${item.name} ${item.price}`.toLowerCase().includes(query);
    });
  };

  render() {
    const itemCards = this.filterItems().map((item) => (
      <ItemCard key={item.name + item.id} item={item} />
    ));

    return (
      <div className="items">
        <br />
        <br />
        <SearchBar onChange={this.setQeury} />
        <div className="row">{itemCards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.rootItems.items,
  };
};

export default connect(mapStateToProps)(ItemsList);
