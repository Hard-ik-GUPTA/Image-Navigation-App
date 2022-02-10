import React,{useState} from 'react';
import PopUp from './PopUp'


function Home(props) {
const [openState,setState]=useState(false)

    const openFunction=()=>{
        setState(true);

    }

    return (
        <>
            <button onClick={openFunction} >open Here</button>
            {openState===true && <PopUp openState={openState}   setTrigger={setState}/> }
        </>
    );

}

export default Home;
