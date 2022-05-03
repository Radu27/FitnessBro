import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import ImageLogo from "../images/fitnessbro-logo1.png"
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
// import {Link} from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #131313;
    background: #000000;
    `;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);
    
    @media screen and(max-width: 768px) {
        grid-grid-template-columns: 1fr;
    }`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding 5rem 2rem;
    
    h1 
    {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }
    
    p 
    {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }`;
const Button = styled.div`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    
    `;

const Image = styled.img`
    height: 400px;
    width: 400px;
    justify-content: center;
    `;
const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding 2rem;
    position: relative;
    `;

const changeBackgroundEnter = (e) => {
    e.target.style.background = "green";
}
const changeBackgroundLeave = (e) => {
    e.target.style.background = "transparent";
}
const changeBackgroundUp = (e) => {
    e.target.style.background = "#00FF00";
}

const changeBackgroundDown = (e) => {
    e.target.style.background = "green";
}


//const history = useHistory();
// const routeChange = () =>{
//     const history = useHistory(); 
//     let path = `/Login`; 
//     history.push(path);
// }

const Hero = () => {
    // const navigate = useNavigate();
    return (
        <Section>
        <Container>
                <ColumnLeft>
                <h1>Bine ai venit pe platforma FitnessBro</h1>
                <p>Schimba-ti stilul de viata</p>
                <Button onMouseEnter={changeBackgroundEnter} 
                        onMouseLeave={changeBackgroundLeave} 
                        onMouseDown={changeBackgroundUp}
                        onMouseUp={<Link className="link--login" to='/Login'></Link>}
                        //onClick={routeChange}
                        >Accesare Platforma
                        {/* onMouseUp={() => {history.push("/information") 
                                           history.go(0)}}>Get Started */}
                        {/* <Link to="/information">Get Started</Link> */}
                </Button>
                <h4><Link className="link--login" to='/Login'>Accesare platforma</Link></h4>
            </ColumnLeft>
            <ColumnRight>
                <Image src={ImageLogo} alt='planet' />
            </ColumnRight>
        </Container>
    </Section>
    )
};

export default Hero;