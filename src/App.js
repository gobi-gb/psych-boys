import { Component } from "react";
import CardList from "./components/card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      boys: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { boys: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { boys, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredBoys = boys.filter((boy) => {
      return boy.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Boys"
          onChange={onSearchChange}
        />
        <CardList boys={filteredBoys} />
      </div>
    );
  }
}

export default App;
