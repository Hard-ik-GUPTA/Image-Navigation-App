import React,{useState} from 'react';



    // const [myStyle, setStyle]=useState({
    //     display:'none'
    // })


function Header1() {
    const [text, setText] = useState("");
    const [result,setResult]= useState("");

    const submitFunction=()=>{
        setResult(text)

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)

    }

    return (
        <>
            <input type="text" id="text" value={text} onChange={handleOnChange}/>
            <button onClick={submitFunction}>Submit</button>
            <p>{result}</p>
        </>
    );
}

export default Header1;
