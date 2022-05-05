import { Component } from "react";

class CardList extends Component {
  render() {
    const { boys } = this.props;
    return (
      <div>
        {boys.map((boy) => {
          return <h1 key={boy.id}>{boy.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
