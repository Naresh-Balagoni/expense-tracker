import "./createProfile.css"
import profile from "../images/profile-icon.png"
import phone from "../images/phone-icon.png"
import {useState} from "react";
function CreateProfile()
{   
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nameValid, setNameValid] = useState(true); 
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const loginDetails={
        name:"",
        phoneNumber:""
    };
    const nameHandler = (e)=>{
        setName(e.target.value);
        

    }
    const phoneNumberHandler = (e)=>{
        setPhoneNumber(e.target.value);
        

    }
   
   const verify=(e)=>{
       if(name.length<4){
        setNameValid(false);
    }
    if(phoneNumber.length<10){
        setPhoneNumberValid(false);
    }
    loginDetails.name(name);
    loginDetails.phoneNumber(phoneNumber);
        e.preventDefault();
        setName("");
        setPhoneNumber("");
    }
    console.log(name);
    console.log(phoneNumber);
  const invalidNameClasses= nameValid? 'invalid input':'register';
  const invalidPhoneNumberClasses= phoneNumberValid? 'invalid input':'register';
 return (
 <div>
    <div className="title">
        <div  >
        <img className ="image"src={profile} alt=""/>
         <h3 >Create your profile</h3>
         <p>Verify your phone number</p>
        </div>
    </div>
    <form onSubmit={verify}>
    <div >
    <div className={invalidNameClasses}>
    <img className ="image1"src={phone} alt=""/>
    <input type="text" className="place" value={name} placeholder="Name" onChange={nameHandler}></input>
    {!nameValid &&<p className="error-text">name should be atleast 4 letters</p>}
    </div>
    <div className={invalidPhoneNumberClasses}>
    <img className="image1"src={profile} alt=""/>
    <input type="all" className="place" value={phoneNumber} placeholder="Phone Number"onChange={phoneNumberHandler}></input>
    {!phoneNumberValid &&<p className="error-text">phone number should be 10 digits</p>}
    </div>
    <div className="register">
    <button className="button" >Verify</button>
    
    </div>
</div>
</form >
</div>
);
}
export default CreateProfile;