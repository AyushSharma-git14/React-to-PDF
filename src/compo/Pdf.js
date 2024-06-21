import React from 'react'
import { usePDF } from 'react-to-pdf';


const Pdf = (props) => {
    const { toPDF, targetRef } = usePDF({filename: 'Home.pdf'});
    return (
       <div>
          <button onClick={() => toPDF()}>Download PDF</button>
          <div ref={targetRef}>
             <div>
                <h5>Name: {props.name}</h5>
                <h5>Email: {props.email}</h5>
                <h5>Course: {props.course}</h5>
             </div>
          </div>
       </div>
    )
 }


export default Pdf
