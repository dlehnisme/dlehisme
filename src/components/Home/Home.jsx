import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'

export class Home extends Component {
    render() {
        return (
            <div className='bg-home'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5 className='hello'>
                                HELLO , THIS IS ELWIN JOHAN SIBARANI
                            </h5>
                            <h1 className='who-ami mt-3'>
                                Management Bachelor Degree Fullstack Developer
                            </h1>
                            <button className='btn btn-info mt-5 btn-big'>See Portofolio</button>
                        </div>
                        <div className='col-lg-6 font-weight-bold'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
