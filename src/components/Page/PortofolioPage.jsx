import React, { Component } from 'react'
import foto from '../../image/elwin.jpeg'
import {Link} from 'react-router-dom'
import gaskuy from '../../image/Portofolio/gaskuy.jpg'
import yutaka from '../../image/Portofolio/yutaka.jpg'
import dlehisme from '../../image/Portofolio/dlehisme.jpg'


export class PortofolioPage extends Component {
    render() {
        return (
            <div>
                <div className='bg-portofolio'>
                    <center>
                        <h2 className='text-on-bg'>View Some Elwin's </h2><br/>
                        <h1 className='text-project'>PROJECT</h1>
                    </center>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 my-3'>
                            <h5 className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga?
                            </h5>
                        </div>

                        <div className='col-lg-4 my-5'>
                            <div className='container-portofolio'>
                                <img className='image-portofolio rounded' src={gaskuy} alt=""/>
                                <div className='overlay'>
                                    <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                                    <h6 className='text-portofolio'>Gaskuy.id</h6>
                                    <Link to='/portofolio-detail'>
                                    <button  className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 my-5'>
                            <div className='container-portofolio'>
                                <img className='image-portofolio rounded' src={yutaka} alt=""/>
                                <div className='overlay'>
                                    <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                                    <h6 className='text-portofolio'>Gaskuy.id</h6>
                                    <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 my-5'>
                            <div className='container-portofolio'>
                                <img className='image-portofolio rounded' src={dlehisme} alt=""/>
                                <div className='overlay'>
                                    <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                                    <h6 className='text-portofolio'>Gaskuy.id</h6>
                                    <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PortofolioPage
