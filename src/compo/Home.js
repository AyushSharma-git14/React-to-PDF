import React,{ useState } from 'react'
import Pdf from './Pdf'

function Home() {
    const[state,setState]=useState({name:'',email:'',course:'',postSubmitted:false})

    const handler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const submitdata=()=>{
        if(!state.email ||! state.name){
            alert("All fields required")
           
        }
        else{
            setState({...state,
                postSubmitted:true
            })
        }
    }

  return (
    <>
    
        <br/>
        <br/>
        <br/>
        {!state.postSubmitted ?
        (<div className='container'>
        <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={state.email} onChange={handler}/>
       
      </div>
      <br/>
      <div class="mb-3">
        <label  class="form-label">Name</label>
        <input type="text" class="form-control"  aria-describedby="NameHelp" name='name' value={state.name} onChange={handler}/>
       
      </div>
      <br/>
      <div class="mb-3">
          <label for="Select" class="form-label">Please select Course</label>
          <select id="Select" class="form-select" name='course' value={state.course} onChange={handler}>
            <option>Select Course</option>
            <option name='B.tech'>B.tech</option>
            <option name='M.tech'>M.tech</option>
    
          </select>
        </div>
        <br/>
      <button type="button" class="btn btn-primary" onClick={submitdata}>Submit</button>
    </form>
    
        </div>
        ) : ( <Pdf name={state.name} email={state.email} course={state.course}/>)
    }
    

    </>
  )
}

export default Home
