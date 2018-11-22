import React from 'react';

import './Person.css';

class Person extends React.Component {
    render() {
        const {onChange, children, click, name, age} = this.props
        return (
            <div className="Person">
            <p onClick={click}>I'm {name} and I am {age} years old!</p>
            <p>{children}</p>
            <input type="text"  value={name} onChange={onChange} />
        </div>
        )
    }
}
// const person = ( props ) => {
//     return (
//         <div className="Person">
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.onChange} value={props.name} />
//         </div>
//     )
// };

export default Person;