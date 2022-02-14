import React from 'react';
import './App.css'

const NavGrid = ({ data,setQuestionState}) => {

    const changeQuestionState=(param)=>{
        setQuestionState(param)
        
    }

    return (
        <>
            <div className='navGridContainer'>
                {data.map((value) => {
                    return (
                        <div className='navGridItem ' key={value.id} onClick={()=>changeQuestionState(value)}>{value.id} </div>
                    )
                })}
            </div>

        </>
    );
};

export default NavGrid;
