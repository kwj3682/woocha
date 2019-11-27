import React from 'react';
import PropTypes from 'prop-types';
// function Food(props) {
// {fav} -> arg에 들어온 Object는 fav를 가지고 있으므로 사용가능 (ES6)
function Food({name, pic, rating}) {
  return (
    // <h3>I love {props.fav}</h3>
    <div>
      <h3>I love {name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src= {pic} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function renderFood(dish) {
  return <Food 
            key={dish.id} 
            name={dish.name} 
            pic={dish.image} 
            rating={dish.rating}
          />;
}

function App() {
  return (
    <div className="App">
      {
        // foodILike.map(dish => <Food name={dish.name} pic={dish.image}/>)
        foodILike.map(renderFood)
      }
    </div>
  );
}

export default App;
