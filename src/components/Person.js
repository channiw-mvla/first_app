import React, {useState} from "react";

const Person = ({firstName,lastName,age,hairColor}) => {
    const [getAge,setAge] = useState(age);
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <ul>
                <li>Age: {getAge}</li>
                <li>Hair Color: {hairColor}</li>
            </ul>
            <button className="btn btn-primary" onClick={()=>setAge(getAge+1)}>Birthday Button for {firstName}</button>
        </>
    );
}
export default Person;