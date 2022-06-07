import React from 'react';

class PersonRow extends React.Component {
    render() {
       
        const {firstName, lastName, age} = this.props.person;


        return(
            <tr className={age >= 65 ? 'bg-danger' : ''}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
            </tr>
        )


    }
}
export default PersonRow