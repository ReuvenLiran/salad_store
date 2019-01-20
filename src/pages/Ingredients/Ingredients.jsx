import React from 'react';
import PropTypes from 'prop-types';
import {
  IngredientList,
  ProceedToCheckout,
} from './parts';


class Ingredients extends React.PureComponent {
  render() {
    const {
      data: {
        items = [],
      },
    } = this.props;
    return (
      <div className="page">
        {<IngredientList
          ingredients={items}
        />}
        <ProceedToCheckout />
      </div>
    );
  }
}

// const Ingredients = () => (
//   <div>
//   vlkagklga
//     <br />
//   sfjlasjfklsa
//     <br />
//   sfjlasjfklsa
//     <br />
//   sfjlasjfklsa
//   </div>
// );

export default Ingredients;
