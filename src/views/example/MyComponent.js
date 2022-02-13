import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500'}, 
            {id: 'abcJob2', title: 'Tester', salary: '400'},
            {id: 'abcJob3', title: 'Project Manager', salary: '1000'}
        ]
    }

    /* 
    JSX -> return block
    fragment
    
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>> Check data input: ', this.state);
    }

    // re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name: </label><br />
                    <input 
                    type="text" 
                    value={this.state.firstName} 
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name: </label><br />
                    <input 
                    type="text" 
                    value={this.state.lastName} 
                    onChange = {(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input type="submit" 
                    onClick = {(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent 
                name = {this.state.firstName}
                age = {'20'}
                address = {'Ho Chi Minh'}
                arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }

}


export default MyComponent;