import React from 'react';
import PropTypes from 'prop-types';

const List = ({ value, index }) => (
  <div className="list" id={index}>
    <div className="list-input">
      <input className="checkbox" type="checkbox" />
      <input className="input" type="text" value={value} />
    </div>
    <div className="buttons">
      <button type="submit" className="listBtn">Delete</button>
    </div>
  </div>
);
List.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default List;
