import React, { useEffect, useState } from 'react';
import Data from './ImageUrls'

const ImgNav = ({ index, setIndex }) => {

  const [imgState, setImageState] = useState("")
  const [styleState, setStyleState] = useState({
    width: "150px",
    height: "100px",

  })
  const renderImages = (index) => {

    const img = Data.map((value) => {
      console.log( index);
      console.log(value.id);

      if (value.id == index + 1) 
        return (<img src={value.link} key={value.id} onClick={() => setImageNo(value.id)} style={{width: "150px",height: "100px",border:"2px solid red"}}></img>);
      
      else
        return (<img src={value.link} key={value.id} onClick={() => setImageNo(value.id)} style={styleState}></img>);
    })
    setImageState(img)
  }

  const setImageNo = (param) => {
    setIndex(param - 1)
  }

  useEffect(() => {
    renderImages(index);

  }, [index]);

  return (<>
    <div className='img-gallery' style={{ margin: "0 auto", width: "600px" }} >{imgState}</div>

  </>);
};

export default ImgNav;
