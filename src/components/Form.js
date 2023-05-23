import React, {useState} from "react";
const Form = () =>{
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    const [errorMessages,setErrorMessages] = useState();
    const validateFirstName = e => {
        let value = e.target.value;
        setFirstName(value);
        if(value.length < 2)
            setErrorMessages("First Name must be at least 2 characters");
        else
            setErrorMessages("")
    }
    const validateLastName = e => {
        let value = e.target.value;
        setLastName(value);
        if(value.length < 2)
            setErrorMessages("Last Name be at least 2 characters");
        else
            setErrorMessages("")
    }
    const validateEmail = e => {
        let value = e.target.value;
        setEmail(value);
        if(value.length < 5)
            setErrorMessages("Email be at least 5 characters");
        else
            setErrorMessages("")
    }
    const validatePassword = e => {
        let value = e.target.value
        setPassword(value)
        if(value.length < 8){
            setErrorMessages("Password be at least 8 characters");
        }
        else if(password !== confirmPassword)
            setErrorMessages("Passwords Must Match");
        else
            setErrorMessages("")
    }
    const validateConfirmPassword = e => {
        let value = e.target.value
        setConfirmPassword(value)
        if(value.length < 8){
            setErrorMessages("Confirm Password be at least 8 characters");
        }
        else if(password !== confirmPassword)
            setErrorMessages("Passwords Must Match");
        else
            setErrorMessages("")
    }
    const showData = () => {
        if (errorMessages === "" && firstName !== undefined  && lastName !== undefined && email !== undefined && password !== undefined  && confirmPassword !== undefined){
            return;
        }
    }
    return (
        <div className="d-flex flex-column m-5">
            <label htmlFor="" className="form-label text-danger text-center">{errorMessages}</label>
            <form action="" className="form-control" onSubmit={e=>e.preventDefault()}>
                <label htmlFor="" className="form-label">First Name</label>
                <input type="text" className="form-control" onChange={e=>validateFirstName(e)}/>
                <label htmlFor="" className="form-label" >Last Name</label>
                <input type="text" className="form-control" onChange={e=>validateLastName(e)}/>
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={e=>validateEmail(e)}/>
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e=>validatePassword(e)}/>
                <label htmlFor="" className="form-label">Confirm Password </label>
                <input type="password" className="form-control" onChange={e=>validateConfirmPassword(e)}/>
                <button className="btn btn-primary mt-2" onClick={()=>showData()}>Submit</button>
            </form>

        </div>
    );
}
export default Form;