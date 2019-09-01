import React from "react";
import "./App.css";

import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends React.Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=53dcfb9b58f3c27ab267737358d6bd07",
    baseURl:
      "https://www.food2fork.com/api/search?key=53dcfb9b58f3c27ab267737358d6bd07",
    details_id: 35384,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      // console.log(jsonData);

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "Sorry, your search didn't return any results."
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { baseURl, query, search } = this.state;

    this.setState(
      () => {
        return {
          url: `${baseURl}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;
