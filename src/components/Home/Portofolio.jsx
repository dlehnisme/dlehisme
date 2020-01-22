import React, { Component } from 'react'
import pic from '../../image/lombok.jpg'
import gaskuy from '../../image/Portofolio/gaskuy.jpg'
import yutaka from '../../image/Portofolio/yutaka.jpg'
import dlehisme from '../../image/Portofolio/dlehisme.jpg'
import  Fade from 'react-reveal/Fade'


export class Portofolio extends Component {

    render() {
        return (
            <div className='container mb-5'>
                <div className='row'>

                    <div className='col-lg-12 mb-5'>
                        <h2 className='text-center'>My Portofolio</h2>
                    </div>

                    <Fade right>
                        <div className='col-lg-4 container-portofolio'>
                            <img className='image-portofolio rounded' src={gaskuy} alt=""/>
                            <div className='overlay'>
                                <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                                <h6 className='text-portofolio'>Gaskuy.id</h6>
                                <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                            </div>
                        </div>
                    </Fade>
                    
                    <Fade bottom delay={1000}>
                        <div className='col-lg-4 container-portofolio'>
                        <img className='image-portofolio rounded' src={yutaka} alt=""/>
                            <div className='overlay'>
                                <h6 className='text-portofolio font-italic pb-5'>Company Profile</h6>
                                <h6 className='text-portofolio'>Yutaka</h6>
                                <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                            </div>
                        </div>
                    </Fade>

                    <Fade top delay={1500}>
                        <div className='col-lg-4 container-portofolio'>
                        <img className='image-portofolio rounded' src={dlehisme} alt=""/>
                            <div className='overlay'>
                                <h6 className='text-portofolio font-italic pb-5'>Web Profile</h6>
                                <h6 className='text-portofolio'>Dlehisme</h6>
                                <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                            </div>
                        </div>
                    </Fade>

                        <div className='col-lg-4'></div>
                        
                        <div className='col-lg-4'></div>

                </div>
            </div>
        )
    }
}

export default Portofolio
