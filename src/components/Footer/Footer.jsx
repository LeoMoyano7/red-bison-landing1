import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
		<footer>
		<div className="footer-top bg-dark">
			<div className="container py-5">
				<div>
					<h1 className="text-white">Red Bison</h1>
				</div>
				<div className="row px-2">
					<div className="col-md-4 footer-links py-2">
						<div className="row">
							<div className="col">
								<h3 className="text-danger text-sm-start">Links</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 flex-column d-flex">
									<a className="text-decoration-none text-white" href="#top-content">Home</a>
									<a className="text-decoration-none text-white" href="#">Features</a>
									<a className="text-decoration-none text-white" href="#">How it works</a>
									<a className="text-decoration-none text-white" href="#">Our clients</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					   <div className="col footer-social">
						<a href="#"><i className="fab fa-facebook-f"></i></a> 
						<a href="#"><i className="fab fa-twitter"></i></a> 
						<a href="#"><i className="fab fa-google-plus-g"></i></a> 
						<a href="#"><i className="fab fa-instagram"></i></a> 
						<a href="#"><i className="fab fa-pinterest"></i></a>
					</div>
				   </div>
			</div>
		</div>
	</footer>
    )
}

export default Footer;
