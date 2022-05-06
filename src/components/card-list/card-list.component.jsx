import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { boys } = this.props;
    return (
      <div className="card-list">
        {boys.map((boy) => {
          return <Card boy={boy} />;
        })}
      </div>
    );
  }
}

export default CardList;
