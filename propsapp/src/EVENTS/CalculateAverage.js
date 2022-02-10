import React, { useState } from 'react';

function CalculateAverage() {

    const [marks1, setMarks1] = useState(0)
    const [marks2, setMarks2] = useState(0)
    const [marks3, setMarks3] = useState(0)
    const [marks4, setMarks4] = useState(0)

    const [result, setResult] = useState("")

    const calculate = () => {
        let x = (parseInt(marks1) + parseInt(marks2) + parseInt(marks3) + parseInt(marks4)) / 4
        setResult(x)
    }
    const handleonChange1 = (event) => {
        setMarks1(event.target.value)
    }

    const handleonChange2 = (event) => {
        setMarks2(event.target.value)
    }

    const handleonChange3 = (event) => {
        setMarks3(event.target.value)
    }

    const handleonChange4 = (event) => {
        setMarks4(event.target.value)
    }

    return (
        <>
            Enter Marks 1<input type='number' onChange={handleonChange1} /><br />
            Enter Marks 2<input type='number' onChange={handleonChange2} /><br />
            Enter Marks 3<input type='number' onChange={handleonChange3} /><br />
            Enter Marks 4<input type='number' onChange={handleonChange4} /><br />
            <button onClick={calculate}>Submit</button>
            <p>{result}</p>
        </>
    );
}

export default CalculateAverage;
