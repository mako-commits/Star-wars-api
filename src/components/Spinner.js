import React from 'react'
import spinner from '../assets/spinner.gif'
import { MDBSpinner } from 'mdbreact';

// const Spinner = () => {
//     return (
//         <>
//             <MDBSpinner yellow />
//         </>
//     );
// }
const Spinner = () => {
    return (
        <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />
    )
}

export default Spinner
