import produce from 'immer';
import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
class PeopleTable extends React.Component{
    state = {
        person: {
            
            firstName: '',
            lastName: '',
            age: ''
        },
        people: [],
        
    }

    onTextChange = e => {
        // const { person } = this.state;
        // const copy = { ...person };
        // copy[e.target.name] = e.target.value;
        // this.setState({ person: copy });

        const newState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });

        this.setState(newState)
    }

    
        
    onAddClick = () => {
        const { people, person } = this.state;

        const newState = produce(this.state, draftState => {
            draftState.people.push(person);
            draftState.person = {
                firstName: '', lastName: '', age: ''
            }
        });

        this.setState(newState);
       
        // const copy = [...people, person]
        // this.setState({
        //     people: copy, person: {
        //         firstName: '', lastName: '', age: ''
        //     }
        // })
    }

    onClearClick = () => {
        this.setState({
            people: [], person: {
                firstName: '', lastName: '', age: ''
            }
        })
    }

    generateTable = () => {
        const {people} = this.state;
        if(!people.length){
            return <h1>No people added yet!</h1>
        }

        return(
            <table className='table table-striped table-bordered, table-hover'>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {people.map((p) => <PersonRow person={p} />)}
                    </tbody>
                </table>
        )
    }

    render(){
        
        const {firstName, lastName, age} = this.state.person;
        return(

            <div className='container mt-5'>
                <PersonForm
                firstName={firstName}
                lastName={lastName}
                age={age}
                
                
                onAddClick={this.onAddClick}
                onTextChange={this.onTextChange}
                onClearClick={this.onClearClick}
                />
                {this.generateTable()}

                
            </div>
        )
    }
}
export default PeopleTable;