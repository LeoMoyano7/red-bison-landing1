import React from 'react'
import './Lauching.css'
import image from '../../assets/images/web-browser.png'

const Lauching = () => {
    return (
        <div className="py-5">
            <p className="text-center mt-5 m-0 p-0 space-badge">LAUCHING MAY 2021</p>
            <h1 className="text-center mt-5 mb-5 title-color">Gigabit Network Solution <br/> + WiFi at No Cost to You</h1>
            <div className="d-lg-flex justify-content-around my-5 mx-5">
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="" className="image-size"/>
                    </div>
                    <h4 className="text-center mt-3 color-subs">VLAN & <br/> Ethernet Jack</h4>
                </div>
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="" className="image-size"/>
                    </div>
                    <h4 className="text-center mt-3 color-subs">Firewall</h4>
                </div>
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="" className="image-size"/>
                    </div>
                    <h4 className="text-center mt-3 color-subs">Network <br/> Monitoring</h4>
                </div>
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="" className="image-size"/>
                    </div>
                    <h4 className="text-center mt-3 color-subs">WiFi</h4>
                </div>
                <div className="my-5">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="" className="image-size"/>
                    </div>
                    <h4 className="text-center mt-3 color-subs">Gigabit Internet <br/> & Static IP</h4>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <button type="button" class="btn btn-primary">SIGN UP NOW</button>
            </div>
        </div>
    )
}

export default Lauching
