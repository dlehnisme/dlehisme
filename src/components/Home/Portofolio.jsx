import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'reactstrap'
import source from '../../config/src'

import  Fade from 'react-reveal/Fade'
import axios from '../../config/axios'

export class Portofolio extends Component {
    state= {
        project : null
    }

    componentDidMount(){
        axios.get('project')
        .then((res)=>{
            this.setState({project : res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    renderProject = () =>{
        let projectMap = this.state.project.map((item)=>{
        return(
            <Fade key={item.id} right>
            <div className='col-lg-4 container-portofolio'>
                <img className='image-portofolio rounded' src={source +item.foto_home} alt={item.jenis_apk}/>
                <div className='overlay rounded'>
                    <h6 className='text-portofolio font-italic pb-5'>{item.jenis_apk}</h6>
                    <h6 className='text-portofolio'>{item.nama_project}</h6>
                    <Link to={`portofolio/detail/${item.nama_project}`}>
                        <button className='btn btn-outline-light text-portofolio mt-5'>View Project </button>
                    </Link>
                </div>
            </div>
        </Fade>
        )
        })
        return projectMap
    }


    render() {
        if(this.state.project === null ){
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
            <div className='container mb-5'>
                <div className='row'>

                    <div className='col-lg-12 mb-5'>
                        <h2 className='text-center'>My Portofolio</h2>
                    </div>
                    {this.renderProject()}
                </div>
            </div>
        )
    }
}

export default Portofolio
