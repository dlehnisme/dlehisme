import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Header extends Component {
    render() {
        return (
            <div className='fixed-top pt-3 container-fluid bg-header'>

                <div className='d-flex flex-md-row justify-content-around '>
                    <h4></h4>
                    <h4></h4>
                        <Link to='/' className='unlinks'>
                            <div className='d-flex flex-column'>
                                <h3 className='font-weight-bold'>Home</h3>
                                <h5 className='font-small'>Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </Link>
                        <Link to='/about' className='unlinks'>
                            <div className='d-flex flex-column'>
                                <h3 className='font-weight-bold'>About</h3>
                                <h5 className='font-small'>Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </Link>
                        <Link to='/portofolio' className='unlinks'>
                            <div className='d-flex flex-column'>
                                <h3 className='font-weight-bold'>Portofolio</h3>
                                <h5 className='font-small'>Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </Link>
                        <Link to='/blog' className='unlinks'>
                            <div className='d-flex flex-column'>
                                <h3 className='font-weight-bold'>Blog</h3>
                                <h5 className='font-small'>Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </Link>
                    
                    <h4></h4>
                    <h4></h4>
                </div>

            </div>
        )
    }
}

export default Header
