import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-5 text-centered'>
              <h1 className='text-slanted text-capitalize'>
                Search for recipes{" "}
                <strong className='text-danger'>food2fork</strong>
              </h1>
              <form className='mt-4' onSubmit={handleSubmit}>
                <label htmlFor='search' className='text-capitalize'>
                  Type recipes seperated by commas
                </label>
                <div className='input-group'>
                  <input
                    type='text'
                    name='search'
                    placeholder='Chicken, onions, carrots...'
                    className='form-control'
                    value={value}
                    onChange={handleChange}
                  />
                  <div className='input-group-append'>
                    <button
                      type='submit'
                      className='input-group-text text-white bg-primary'
                    >
                      <i className='fa fa-search'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
