import React from 'react'
import './Benefits.css'

const Benefits = () => {
	return (
		<div>
			<main class="mainClass py-5">
				<div class="w-75 my-5">
					<div class="col title">
						<h4 class="p-2 text-title">KEEY BENEFITS</h4>
					</div>
					<div class="containerBenefits p-5">
						<div class="row d-flex justify-content-around">
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Carrier Grade Network
									Communications Solution
									at No Cost to You
								</p>
							</div>
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Access to Your Private Network Anywhere at IBM CPRT & Water Campus
								</p>
							</div>
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Immediate WiFi Access
								</p>
							</div>
						</div>
						<div class="row d-flex justify-content-around">
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Always Available Service
									Identical Upload/Download
									Gigabit Speeds
								</p>
							</div>
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Reliable & Secure
									<br />
									<span class="fully-text">
										(Fully Redundant Design & Built
										with Next Generation Security)
									</span>
								</p>
							</div>
							<div class="col-lg-3 my-sm-3 m-lg-4 m-sm-2">
								<p class="text-bold">
									Business Continuity Great
									Option for a Back-up
									Network Solution
								</p>
					  </div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Benefits
