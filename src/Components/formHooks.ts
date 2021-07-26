import React, { useState } from 'react'

interface initialFormValues {
    bill?:number ,
    tip?:number ,
    noOfPeople?:number,
  }

type funcVoid = ()=>void
type funcEvent = (event:any)=>void

interface formReturn {
    handleSubmit: any,
    handleOnChange: any,
    inputs: initialFormValues
}
  
  const initialValues:initialFormValues = {
    bill:0,
    tip:0,
    noOfPeople:0
  }
  
export const useForm = (callback:()=>void):formReturn => {
    const [inputs, setInputs] = useState({
        bill:0,
        tip:0,
        noOfPeople:0
      }
    )

//use the preventDefault to prevent the form from reloading the whole page
    const handleSubmit =(event:any) => {
        if(event){
            event.preventDefault()
        }
        callback()
    }
 
//initialize a useState function with setInputs which takes values from the all input elements from the form
 //create handle input change function
 //use  the setInput to set the value of the inputs state
 //bring in all initial state
 //set the new input change to target name as key and target value as the new value (..., [target.name]:target.value)
const handleOnChange=(event:any) => {
    event.persist()
    setInputs(inputs=>({
        ...inputs,
        [event.target.name]: event.target.value
    }))
    
}

 
return {
    handleSubmit,
    handleOnChange,
    inputs
    }
  }


