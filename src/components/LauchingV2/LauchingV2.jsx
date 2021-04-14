import React from 'react'
import mano from '../../assets/images/mano.png'
import './LauchingV2.css'

const LauchingV2 = () => {
    return (
        <>
            <div className="row w-100 m-0 mt-lg-5 mt-sm-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="color-bg width-bg mt-5 mb-4 py-3">
                        <h4 className="ml-5 title-style">LAUNCHING MAY 2021</h4>
                    </div>
                    <div className="">
                        <h2 className="subs-style">RedBison WiFi</h2>
                        <p className="text-style">Sign-up up during service launch in May</p>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <img src={mano} alt="" className="w-100 image-none"/>
                </div>
            </div>
            <div>
                <div className="color-bg mb-4 py-3">
                    <h4 className="text-center m-0 services-style">ALWAYS AVAILABLE SERVICE PLUS</h4>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <div className="containerMbps mb-lg-5">
                        <h2 className="title-mb text-center">150<span className="mbps">Mbps </span><span className="priv">Private WiFi Internet Access</span></h2>
                        <div className="esquina"></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button type="button" class="btn btn-primary btn-custom">SIGN UP NOW</button>
                </div>
                <div className="bg-color p-5 text-center">525 LAFAYETTEST. | 161 THIRDST. | 200 WATERST. | 111 THIRDST. <br /> <b>BATONROUGE, LA</b></div>
            </div>
        </>
    )
}

export default LauchingV2
