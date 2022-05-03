import React from 'react'
// import ImageLog from "../images/log2.jpg"
import "./Register.scss"
import {Link} from 'react-router-dom'
import left_picture from "../../images/left-register.PNG"
import right_picture from "../../images/right-register.jpg"

function Register() {
    return (
        <div className='main-Register'>

            <div className='left-side'>
                <img src={left_picture} id="img-left-id"/>
                <h3>"People who put themselves on the line and sacrifice their own safety for the 
                    greater good and for others, and anyone in any profession whose 
                    concern is the welfare for other people instead of the individual,
                     are inspiring and important!"</h3>
                <h2>-Chris Hemsworth</h2>
            </div>

            <div className='middle-side'>
                <div className='body-middle'>
                    <div className='container'>
                        <h1>Creati-va un cont!</h1>
                        <form>
                            <div className='input-group'>
                                <h5>Prenume</h5>
                                <input type="text" name="Fname" id="fname" />
                            </div>
                            <div className='input-group'>
                                <h5>Nume</h5>
                                <input type="text" name="Fname" id="fname" />
                            </div>
                            <div className='input-group'>
                                <h5>Email</h5>
                                <input type="Email" name="email" id="email1" />
                            </div>
                            <div className='input-group'>
                                <h5>Parola</h5>
                                <input type="password" name="pass" id="pass1" />
                            </div>
                            <div className='input-group'>
                                <h5>Confirma Parola</h5>
                                <input type="password" name="pass" id="pass2" />
                            </div>
                                <input type="submit" id="submit_btn" value="Inregistrare" />

                            <div className="bottom--SignIn" >
                                <h4 className="h4--text-register">Aveti deja un cont ?
                                <Link className="link--login" to='/'>Logati-va</Link>
    
                                </h4>
                                <h4>
                                <Link className="link--login" to='/Choose'>Move to partners!</Link>
                                </h4>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <div className='right-side'>
            <img src={right_picture} id="img-right-id"/>
                <h3>"Enough is not in my vocabulary!"</h3>
                <h2>-Mike Thurston</h2>
            </div>
        </div>
    )
};

export default Register;