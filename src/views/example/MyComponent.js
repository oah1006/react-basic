import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: '',
        age: 20,

    }

    /* 
    JSX -> return block
    fragment
    
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }   

    handleClickButton = () => {
        alert('Click me');
    }

    // re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    my name is {this.state.name}
                </div>
                <div className="second">
                    My age is {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                </div>
            </>
        )
    }

}


export default MyComponent;