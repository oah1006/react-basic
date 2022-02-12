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
        console.log('>>> call props: ', this.props)
        let { name, age, address, arrJobs } = this.props;
        let a = '';
        return (
            <>
               <div className="job-lists">
                   {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                       })
                   }
                   {console.log('>> check map array: ', a)}
               </div>
            </>
        )
    }

}


export default ChildComponent;