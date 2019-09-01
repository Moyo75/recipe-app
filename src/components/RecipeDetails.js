import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
      url: `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=53dcfb9b58f3c27ab267737358d6bd07&rId=${this.props.id}`
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);

      this.setState({
        recipe: jsonData.recipe
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.recipe.ingredients);

    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    const { handleIndex } = this.props;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <button
                type='button'
                className='btn btn-warning mb-5 text-capitalize'
                onClick={() => handleIndex(1)}
              >
                back to recipe
              </button>
              <img src={image_url} alt='recipe' className='d-block w-100' />
            </div>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h5 className='text-uppercase'>{title}</h5>
              <h5 className='text-warning text-slanted text-capitalize'>
                provided by {publisher}
              </h5>
              <a
                href={publisher_url}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mt-2 text-capitalize'
              >
                publisher webpage
              </a>
              <br />
              <a
                href={source_url}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-success mt-2 text-capitalize'
              >
                recipe url
              </a>
              <ul className='list-group mt-4'>
                <h2 className='mb-3 mt-4'>ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li className='list-group-item text-slanted' key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
