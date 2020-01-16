import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import image from '../../image/lombok.jpg'

export class Testimoni extends Component {
    render() {
        var content = [
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Keong',
                foto : '',
                umur : 19,
                gambar : `${image}`
            },
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Dleh ',
                foto : '',
                umur : 19,
                gambar : `${image}`

            },
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Keong ',
                foto : '',
                umur : 19,
                gambar : `${image}`

            }
        ]

        return (
    <div>
        <div className='container-fluid'>
                <h2 className='tulisan-page-one text-center mb-5'>
                    Our Testimonies
                </h2>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-8'>
                            <Slider autoplay={200} duration={4000} nextButton={''} previousButton={''}>
                                {content.map((item)=>(
                                    <div>
                                            <img src={item.gambar} className='gambar-tengah'  alt=""/>
                                            <blockquote className="blockquote text-center mx-auto" >
                                        <h5>{item.komentar}</h5>
                                            <footer className="blockquote-footer">
                                            {item.nama} <cite>{item.umur}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                ))}
                            </Slider>
                        <hr className='garis-testi'/>
                            </div>
                            <div className='col-lg-2'></div>
                        
                        </div>
                    </div> 
        </div>


        )
    }
}

export default Testimoni
