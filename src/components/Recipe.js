import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      source_url,
      publisher,
      title,
      recipe_id
    } = this.props.recipe;

    const { handleDetails } = this.props;

    // console.log(this.props.recipe);
    return (
      <React.Fragment>
        <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
          <div className='card'>
            <img
              src={image_url}
              alt='recipe'
              className='img-card-top'
              style={{ height: "14rem" }}
            />
            <div className='card-body text-capitalize'>
              <h4>{title}</h4>
              <h5 className='text-yellow text-slanted'>
                Provided by {publisher}
              </h5>
            </div>
            <div className='card-footer'>
              <button
                type='button'
                className='btn btn-primary text-capitalize'
                onClick={() => handleDetails(0, recipe_id)}
              >
                Details
              </button>
              <a
                href={source_url}
                className='btn btn-success mx-2 text-capitalize'
                target='_blank'
                rel='noopener noreferrer'
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
