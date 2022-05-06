import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
    fetch(
      "https://gist.githubusercontent.com/gobi-gb/8059bc1514e18fb077270d87bcd22ec3/raw/d8ff6ee82e38b0c8c99ad62962a3649de304f83b/boys.json"
    )
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
        <h1 className="title">EEE Boys</h1>
        <SearchBox
          className="boys-search-box"
          placeholder="Search Boys"
          onChangeHandler={onSearchChange}
        />
        <CardList boys={filteredBoys} />
      </div>
    );
  }
}

export default App;
