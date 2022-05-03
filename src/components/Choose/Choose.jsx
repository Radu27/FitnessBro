import React from 'react'
import "./Choose.scss"
import left from "../../images/Radu.jfif"
import right from "../../images/Andra.jfif"
import star from "../../images/star.png"
import {Link} from 'react-router-dom'

function Choose() {

    return (
        <div className='main--choose'>
            <h3 className="h3--choose">Alegeti antrenorul: </h3>
            <div className='container'>
                <div className='left'>
                    <img src={left} id="left-img-id"/>
                    <div className="stats">
                        <img src={star} id="star-img-id"/>
                        <span>10.0 • </span>
                        <span className="gray">Zeu •</span>
                        <span className="gray">ROMANIA</span>
                    </div>
                    <div className="age--">
                        <h4 className="age">Nume:</h4>
                        <h4>Radu Purecel</h4>
                    </div>
                    <div className="exp--">
                        <h4 className="exp">Experienta:</h4>
                        <h4>5+ ani</h4>
                    </div>
                </div>
                <div className='right'>
                    <img src={right} id="right-img-id"/>
                    <div className="stats">
                        <img src={star} id="star-img-id"/>
                        <span>3.5 • </span>
                        <span className="gray">Amatoare•</span>
                        <span className="gray">ROMANIA</span>
                    </div>
                    <div className="age--">
                        <h4 className="age">Nume:</h4>
                        <h4>Andra Dumitru</h4>
                    </div>
                    <div className="exp--">
                        <h4 className="exp">Experienta:</h4>
                        <h4>2 ani</h4>
                    </div>
                </div>
            </div>
            <h4>
                <Link className="link--login" to='/Choose'>Move to partners!</Link>
            </h4>
        </div>
    )
};

export default Choose;