import React from "react"
import PropTypes from "prop-types"

function Food({ name, imgUrl, rating }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={imgUrl} alt={name} />
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


export default Food;