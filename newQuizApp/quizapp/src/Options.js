import React from 'react';
import { useState, useEffect } from 'react';

const Options = ({ data, questionState, setQuestionState }) => {
    const { id, name, img, selected } = questionState


    const [optionsArrayState, setOptionsArrayState] = useState(['A', 'B', 'C', 'D'])

    const [buttonStyleState, setButtonStyleState] = useState({
        backgroundColor: 'white'
    })

    const saveOption = (param) => {
        data[(questionState.id) - 1].selected = param
        console.log(data)

        setOptionsArrayState(['A', 'B', 'C', 'D'])
    }

    return (
        <>
            <div>
                {optionsArrayState.map((value) => {
                    console.log(questionState.id, data[(questionState.id) -1].selected, value)
                    if (value === data[(questionState.id) -1].selected.value)

                        return <button key={value} onClick={() => saveOption({ value })} style={{ backgroundColor: 'green' }} >{value}</button>
                    else
                        return (<button key={value} onClick={() => saveOption({ value })} style={{ buttonStyleState }}  >{value}</button>)
                })}


            </div>
        </>
    );
};

export default Options;
