import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Footer extends Component {
    render() {
        return (
            <div style={{color:'grey'}} className='background-footer'>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-center'>johanelsibarani.com</div>
                    <div className='d-flex justify-content-around'>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                        <Link className='icon-decoration' to='/'>
                        <h4>Home</h4>
                        </Link>
                        <Link className='icon-decoration' to='about?filter=all'>
                        <h4>About</h4>
                        </Link>

                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div style={{color:'grey'}}>
                            <a className='icon-decoration' href="https://www.instagram.com/johanellsibarani/">
                            <i className="fab fa-instagram fa-5x"></i>
                            </a>
                        </div>
                        <div style={{color:'grey'}}>
                            <a className='icon-decoration' href="https://github.com/dlehnisme">
                            <i className="fab fa-github fa-5x"></i>
                            </a>
                        </div>
                        <div style={{color:'grey'}}>
                            <a className='icon-decoration' href="https://www.linkedin.com/in/johanelsibarani/">
                            <i className="fab fa-linkedin fa-5x"></i>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    © 2019 Elwin Johan Sibarani. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
