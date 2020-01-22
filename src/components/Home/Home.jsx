import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'
import  Fade from 'react-reveal/Fade'

export class Home extends Component {
    render() {
        return (
            <div className='bg-home'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Fade duration={5000}>
                            <h5 className='hello'>
                                HELLO , THIS IS ELWIN JOHAN SIBARANI
                            </h5>
                            </Fade>
                            <Fade bottom delay={1000}>
                            <h1 className='who-ami mt-3'>
                                Management Bachelor Degree 
                            </h1>
                            <h1 className='who-ami'>
                                Full-stack Developer
                            </h1>
                            </Fade>
                            <Fade left big delay={1500}>
                            <button className='btn btn-info mt-5 btn-big'>See Portofolio</button>
                            </Fade>
                        </div>
                        <div className='col-lg-6 font-weight-bold'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
