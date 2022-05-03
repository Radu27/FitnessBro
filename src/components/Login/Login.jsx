import React,{useState} from 'react'
// import ImageLog from "../images/log2.jpg"
import "./Login.scss"
import {Link} from 'react-router-dom'
import logo from '../../images/log2.jpg'
import picture2 from "../../images/login.jpg"

function Login() {

    const [emailval, setemailval] = useState("");   // useState este un Hook care are rolul
                                                    // de a initializa un state(un obiect care contine date si informatii
                                                    // despre component) pentru functia sa si returneaza o variabila cu 
                                                    // valoarea curenta a variabile.De asemenea, returneaza alta functie pentru
                                                    // a actualiza valoarea state-ului.

    const [passval, setpassval] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='main-login'> {/* Tag-ul <div> reprezinta sectiunea pentru intreaga pagina*/}
            <div className="login-contain"> {/* Tag-ul <div> reprezinta sectiunea login din stanga si dreapta*/}
            <div className="left-side"> {/* Tag-ul <div> reprezinta sectiunea login din partea stanga*/}
            <div className="img-class"> {/* Tag-ul <div> reprezinta sectiunea pentru care modificam parametrii pentru imagine*/}
                <img src={logo} id="img-id" /> 
            </div>
                <form onSubmit={handlesubmit}>
                    <label for="email_ID">Email</label>
                    <input placeholder="Enter your email..." type="email" value={emailval} id="email_ID"
                    onChange={((e)=>{setemailval(e.target.value)})}/>

                    <label for="pass_ID">Password</label>
                    <input placeholder="Enter password" type="password" id="pass_ID"
                    value={passval} on onChange={((e)=>{setpassval(e.target.value)})}/>
                    <button type="submit" id="sub_butt">Logare</button>
                </form>  

                <div className="footer">
                    <h4>Nu ai cont? <Link className="link--register" to='/Register'>Inregistreaza-te</Link></h4>
                </div>
            </div>
            <div className="right-side">
                <div className="img-class-right">
                    <img src={picture2} id="img-id-right" />
                    <h4 className="h4-text-right">JUST DO IT!</h4>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Login;