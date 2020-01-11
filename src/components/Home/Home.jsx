import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'

export class Home extends Component {
    render() {
        return (
            <div className='bg-home'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <center>
                                <h1 className='nordic-font'>dlehisme</h1>
                                <h5 className='typewriter'>
                                <Typewriter
                                options ={{
                                    strings: ['Fullstack Developer', 'Management Bachelor Degree', 'React Native', 'MongoDB', 'MySQL', 'PHP', 'Codeigniter'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                                </h5>
                                <button className='btn btn-outline-light' style={{width:'200px',height:'70px',fontSize:'25px'}}>Contact Me</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
