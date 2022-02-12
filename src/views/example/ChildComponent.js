import React from 'react';

// class ChildComponent extends React.Component {
//     // re-render
//     render() {
//         console.log('>>> call props: ', this.props)
//         let { name, age, address, arrJobs } = this.props;
//         let a = '';
//         return (
//             <>
//                <div className="job-lists">
//                    {
//                         a = arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                        })
//                    }
//                    {console.log('>> check map array: ', a)}
//                </div>
//             </>
//         )
//     }

// }

const ChildComponent = (props) => {
    let {arrJobs} = props;
    return (
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default ChildComponent;