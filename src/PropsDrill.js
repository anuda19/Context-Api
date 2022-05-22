import {useState} from 'react';
const ValidateData = (props) => {
    return(
        <h1>
            <CheckNumber number={props.number} /> </h1>
    )
}

const CheckNumber = (props) => {
    return(
        <div>Check Number :
            {props.number}
        </div>
    )
}

const PropsDrill = () => {
    const [numbers] = useState('8')
    return(
        <div>
            <h1>Total orders pickup today</h1>
            <ValidateData number={numbers} />
        </div>
    )
}

export default PropsDrill;