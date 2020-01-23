import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import source from '../../config/src'


import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    Button,
    CardGroup,
    Spinner,
    Table,
} from 'reactstrap'


import foto from '../../image/gunung.jpg'
import axios from '../../config/axios'
export class DetailPortofolio extends Component {
    state={
        project : null,
        tech_project : null,
        foto_project : null
    }

    componentDidMount(){
        var path = this.props.location.pathname
        path = path.split('/')
        var namaProject = path[3]

        axios.get(`detail/project/${namaProject}`)
            .then((res)=>{
                this.setState({project : res.data})
            })
            .catch((err)=>{
                console.log(err)
            })
        axios.get(`tech/project/${namaProject}`)
        .then((res)=>{
            this.setState({tech_project : res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`foto/project/${namaProject}`)
        .then((res)=>{
            this.setState({foto_project : res.data})
            console.log(this.state.foto_project)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        if(this.state.project === null || this.state.tech_project === null || this.state.foto_project === null){
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
        let {nama_project,prolog, desc_project, alamat_github, alamat_web} = this.state.project[0]
        return (
        <div>

            <div className='bg-detail-porto'>
                <h1 className='text-project-detail'>PROJECT</h1>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Card className='my-auto' style={{width:'100%'}}>
                            <Slider>
                                {this.state.foto_project.map((val)=>{
                                    return(
                                        <CardImg top width="100%" height="50%" src={source + val.foto} alt="Card image cap" /> 

                                    )
                                })}
                            </Slider>
                        </Card>
                        <Card>
                            <div className='d-flex justify-content-start flex-wrap'>
                                {this.state.tech_project.map((tech)=>{
                                    return(
                                        <span className='box-tech mx-2 my-2'>{tech.tech} </span>
                                    )
                                })}

                            </div>
                        </Card>
                    </div>

                    {/* CARD SEBELAH KIRI */}
                    <div className='col-lg-6'>
                        <CardGroup>
                                <Card>
                                    <CardBody>
                                        {/* NAMA PROJECT  */}
                                    <CardTitle> 
                                        <h1 className='tulisan-page-one'>{nama_project} </h1>
                                        </CardTitle>
                                        {/* PROLOG */}
                                    <CardSubtitle>{prolog} </CardSubtitle>
                                    
                                    </CardBody>
                                    <CardBody>
                                        <center>
                                    <a href={alamat_github}>
                                    <Button  className='mx-1' color='warning' style={{width:'40%'}}>
                                        GitHub
                                        <i class="fab fa-github pl-1"></i>
                                    </Button>
                                    </a>

                                    <a href={alamat_web}>
                                    <Button className='mx-1' color='info' style={{width:'40%'}}>
                                        Web
                                        <i class="fas fa-globe pl-1"></i>
                                    </Button>
                                    </a>
                                        </center>
                                    </CardBody>
                                </Card>
                        </CardGroup>
                        <Card className='my-auto' style={{width:'100%'}}>
                            <CardBody >
                                <CardTitle>
                                    <h3 className='font-weight-bold'>
                                        Project Description 
                                    </h3> 
                                </CardTitle>
                                <CardText> {desc_project} </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default DetailPortofolio
