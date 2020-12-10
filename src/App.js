import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search.box.component";
import "./App.css";
import "./index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  //  how to fetch API  *********
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchField } = this.state;
    const filterMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filterMonster}></CardList>
      </div>
    );
  }
}
export default App;
