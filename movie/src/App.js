import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}/>
    </div>
  );
}

const FoodILike = [
  {
    id : 1,
    name : 'kimchi',
    rating : 5,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDhfMjIy%2FMDAxNjMxMDc4Mzk2MzU5.EK79MIWCqtqT5b9zebfFG0JsqeQOVctv5baLXY03LiQg.wn0D_Phns_DgOeYL4IsNXQ7uHNNu8t7XZ9XBu0eG8Scg.JPEG.tuktakmarket%2Fbusanbulkimchi0002.jpg&type=a340'
  },
  {
    id: 2,
    name : 'Samgyeopsal',
    rating : 4,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjk3%2FMDAxNjMwNTk3NDQyMzY1.6-vme9RdAttZU0zGf4flJ4eeh_z5mLZabjzvZByNjc4g.D3DBzg_rrEVyt25XGKqv5TUTLkKo8_CjwoTTqqVvadAg.PNG.2verything%2FDSC03249.png&type=sc960_832'
  },
  {
    id : 3,
    name : "kimbap",
    rating : 4.5,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7-rpW2ynK3Mq89GWd2Q36QHaE8%26pid%3DApi%26h%3D160&f=1'
  }
];

function App(){
  return (
    <div>
      {FoodILike.map(item => (
        <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />
      ))};
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}
export default App;