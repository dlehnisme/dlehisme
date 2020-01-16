import React, { Component } from 'react'
import pic from '../../image/lombok.jpg'

export class Portofolio extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className='row'>

                    <div className='col-lg-12 mb-5'>
                        <h2 className='text-center'>My Portofolio</h2>
                    </div>

                    <div className='col-lg-4 container-portofolio'>
                        <img className='image-portofolio rounded' src={pic} alt=""/>
                        <div className='overlay'>
                            <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                            <h6 className='text-portofolio'>Gaskuy.id</h6>
                            <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                        </div>
                    </div>

                    <div className='col-lg-4 container-portofolio'>
                    <img className='image-portofolio rounded' src={pic} alt=""/>
                        <div className='overlay'>
                            <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                            <h6 className='text-portofolio'>Gaskuy.id</h6>
                            <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                        </div>
                    </div>

                    <div className='col-lg-4 container-portofolio'>
                    <img className='image-portofolio rounded' src={pic} alt=""/>
                        <div className='overlay'>
                            <h6 className='text-portofolio font-italic pb-5'>Web app</h6>
                            <h6 className='text-portofolio'>Gaskuy.id</h6>
                            <button className='btn btn-outline-light text-portofolio mt-5'>View Project  </button>
                        </div>
                    </div>
                        <div className='col-lg-4'></div>
                        <button className='col-lg-4 col-md-12 mx-auto btn btn-block btn-light my-5' style={{width:'300px',height:'70px',fontSize:'25px',border:'1px black solid'}}>
                            <h5>
                                View More Portofolio
                            </h5>  
                        </button>
                        <div className='col-lg-4'></div>

                </div>
            </div>
        )
    }
}

export default Portofolio
