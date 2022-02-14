import React, { useState } from 'react';
import NavGrid from './NavGrid';
import Main from './Main';
import data from './data'

  function App() {
    console.log(data)

    const [questionState,setQuestionState]=useState(data[0])


    console.log(questionState);

    return (
      <>
      <div className='quiz'>
      <NavGrid data={data} questionState={questionState} setQuestionState={setQuestionState}/>
      <Main data={data} questionState={questionState} setQuestionState={setQuestionState} />
      </div>
      </>
    );
  }

export default App;
