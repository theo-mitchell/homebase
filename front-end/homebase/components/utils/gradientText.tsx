import { useState } from "react";

const GradientText = (props) => {
    const [gradient, setGradient] = useState('red');
    
    return (
        <div style={{color: 'red', backgroundColor: 'lime'}}>
            {props.children}
        </div>
    )
}

export default GradientText;