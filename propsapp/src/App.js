import React from 'react'
// {import Main from './EVENTS/PropsExample/TableMain'
// import Example2 from './PropsExample2/Example2';
// import Car from './State/car'
// import EventBind from './EVENTS/EventBind';
// import Parsing from './EVENTS/ParsingParam';
// import Event from './EVENTS/Event';
// import Header from './EVENTS/Header1';
// import CalculateAverage from './EVENTS/CalculateAverage';}

import Home from './Pop-up/Home';

 function App() {
  let x=12;
  const imgUrl= `https://firebasestorage.googleapis.com/v0/b/fir-react-63483.appspot.com/o/Untitled${x}.png?alt=media&token=0ef18f8a-7427-4bab-a7f1-ca7660222c83`
  return (
    <div>

          <Home imgUrl={imgUrl}/>

    </div>
  );
}
export default App;