import React from 'react';


class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
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
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        //key: value

        let {name, age} = this.props;
        return (
            <>
                <div>Child Component: {name} - {age}</div>
            </>
        )
    }

}


export default ChildComponent;