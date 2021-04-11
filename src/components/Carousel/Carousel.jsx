import React from 'react';

const Carousel = () => {
    return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="w-100 h-50 m-auto" src="https://wallpaperaccess.com/full/3812738.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img className="w-100 h-50 m-auto" src="https://www.wallpapertip.com/wmimgs/92-923100_multi-monitor-dual-screen-widescreen-wallpaper-dual-screen.jpg" alt="" />
                </div>
                <div className="carousel-item active">
                    <img className="w-100 h-50 m-auto" src="https://wallpaperaccess.com/full/2115668.jpg" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
