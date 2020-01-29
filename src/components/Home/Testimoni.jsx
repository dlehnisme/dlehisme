import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import axios from '../../config/axios'
import {Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'



export class Testimoni extends Component {
    state={
        testimoni : null
    }
    componentDidMount (){
        axios.get('testimoni')
        .then((res)=>{
            this.setState({testimoni : res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.testimoni === null){
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <center>
                                <Spinner type='grow' color='primary' size='xl' />
                            </center>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='tulisan-page-one text-center mb-5'>
                            Our Testimonies
                        </h2>
                    </div>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <Slider autoplay={1000}  nextButton={''} previousButton={''}>
                            {this.state.testimoni.map((item)=>(
                                <div key={item.id}>
                                        <blockquote className="blockquote text-center" >
                                    <h5>{`'${item.description}'`}</h5>
                                        <footer className="blockquote-footer">
                                        {item.nama} <cite>{item.hub}</cite> <br/>
                                        <h6>{item.job}</h6>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-12'>
                        <center>
                            <Link to='/about?filter=all'>
                                <button className='btn btn-info btn-margin-minus btn-big'>About Me</button>
                            </Link>
                        </center>
                    <hr className='garis-testi'/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Testimoni
