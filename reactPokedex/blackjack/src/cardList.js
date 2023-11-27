import React, { Component } from "react";
import Card from "./card";

class CardList extends Component {
  render() {
    const cards = this.props.cards.map(cardId => (
      <Card cardId={cardId} key={cardId} />
    ));
    return <div>{cards}</div>;
  }
}

export default CardList;
