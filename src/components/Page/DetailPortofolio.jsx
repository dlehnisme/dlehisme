import React, { Component } from 'react'
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
export class DetailPortofolio extends Component {
    render() {
        return (
        <div>

            <div className='bg-detail-porto'>
                <h1 className='text-project-detail'>PROJECT</h1>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Card className='my-auto' style={{width:'100%'}}>
                            <CardImg top width="400" height="50%" src={foto} alt="Card image cap" /> 
                            <CardBody >
                            <CardTitle> Deskripsi Event </CardTitle>
                            <CardText> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod porro nihil autem ea est esse voluptates, optio unde id inventore velit iusto numquam odit veritatis laboriosam consectetur, eum repudiandae nobis eligendi dignissimos. Tenetur, laborum. Dicta, consectetur nisi minus quis aliquid blanditiis numquam porro repellendus exercitationem voluptates fugiat, nulla quisquam libero est cupiditate illum. Voluptatum dolorum a iure quia illo possimus similique fugit quas delectus ratione molestias ipsam nisi minima est ea beatae nulla reprehenderit optio exercitationem, omnis, vitae impedit odit! Eum dignissimos dolorum vel repellat officiis. Expedita error eos, repellat unde dolores soluta id? Nam doloribus quam iusto quisquam unde. </CardText>
                            {/* <Button color='success' style={{width:'100%'}}>Pesan</Button> */}
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <CardGroup>
                                <Card>
                                    <CardBody>
                                    <CardTitle> 
                                        <h1 className='tulisan-page-one'>Nama Event</h1>
                                        
                                        </CardTitle>
                                    <CardSubtitle> Lorem ipsum dolor sit amet.</CardSubtitle>
                                    <CardText>
                                    <i class="fas fa-money-bill-wave fa-1x" style={{marginRight:10}}></i>
                                        
                                    </CardText>
                                    <CardText>
                                    <i class="far fa-calendar-alt fa-1x" style={{marginRight:10}}></i>
                                    </CardText>
                                    <CardText>
                                    <i class="far fa-clock fa-1x" style={{marginRight:10}}></i>
                                    </CardText>
                                    </CardBody>
                                    <CardBody>
                                    <Button color='success' style={{width:'100%'}}>Pesan</Button>
                                    </CardBody>
                                </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default DetailPortofolio
