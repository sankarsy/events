import React from 'react'
import spcialpuja from './image/spicial puja.avif'
import kalipuja from './image/kali puja.jpg'
import santhosipuja from './image/santhisi puja.jpg'
import durgapuja from './image/durga puja.jpeg'
import './cssfile/Puja.css'
import { FaArrowRight } from "react-icons/fa";

function Puja() {
    return (
        <section className='puja mt-5'>

            <header className='text-center'>
                <p>FESTIVALS</p>
                <h1>Our Festivals Puja</h1>
            </header>


            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card puja-card" >
                            <img class="img-fluid " src={spcialpuja} alt="Card image cap" />
                            <div class="card-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <a className='nav-link' href="">GET STARTED NOW</a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card puja-card" >
                            <img class="img-fluid" src={durgapuja} alt="Card image cap" />
                            <div class="card-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <a className='nav-link' href="">GET STARTED NOW</a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card puja-card" >
                            <img class="img-fluid" src={santhosipuja} alt="Card image cap" />
                            <div class="card-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <a className='nav-link' href="">GET STARTED NOW</a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card puja-card" >
                            <img class="img-fluid" src={kalipuja} alt="Card image cap" />
                            <div class="card-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <a className='nav-link' href="">GET STARTED NOW</a>
                                    <FaArrowRight size={14} color='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Puja
