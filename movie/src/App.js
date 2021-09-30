import React from 'react';

function Food(props) {
  return <h1>I Love Potato</h1>;
}
function App(){
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" sth={true} pa={['hello',1,2,3,4,true]}/>
    </div>
  );
}

export default App;