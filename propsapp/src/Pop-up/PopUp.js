import React, { useState } from 'react';
import ImgNav from './ImgNav';
import './style.css'
import data from './ImageUrls'

function PopUp(props) {
    let { openState, setTrigger } = props

    const [index, setIndex] = useState(0)

    const { id,link } = data[index]


    const checkIndex = (number) => {
        if (number > data.length-1)
            return 0;
        if (number < 0){
            return data.length-1;}
        else
            return number;
    }

    const nextImg = () => {
        setIndex((index) => {
            return checkIndex(index + 1)
        })


    }

    const prevImg = () => {
        setIndex((index) => {
            return checkIndex(index - 1)
        })


    }

    return (openState) ? (
        <>
            <div>
                <div className='container'>
                    <div className='header'>
                        <h1>This is container</h1>
                        <h1 onClick={() => { setTrigger(false) }}>X</h1>
                    </div>
                    <div><img id="main-img" src={link} ></img></div>
                    <div className='footer'>
                        <button onClick={prevImg}>Previous</button>
                        <button onClick={nextImg}>Next</button>

                    </div>
                    <div className='gallery'>
                        <ImgNav index={index} setIndex={setIndex}/>
                    </div>
                </div>

            </div>
        </>
    ) : (null);
}

export default PopUp;