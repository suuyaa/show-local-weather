import React from 'react'

const DegreeToggle = (props) => {
        return (
            <React.Fragment>
                <button name="degree-type" id="celsius" value="celsius" onClick={props.Click}>&deg;C</button>
                <button name="degree-type" id="fahrenheit" value="fahrenheit" onClick={props.Click}>&deg;F</button>

                {/* <button onClick={props.Click}>&deg;C</button>
                <button onClick={props.Click}>&deg;F</button> */}
            </React.Fragment>
        )

}

export default DegreeToggle;