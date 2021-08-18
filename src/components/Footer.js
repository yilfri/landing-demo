import React from 'react';
import { FooterWrapper, RFooter, Box, Brand, BFooter, Features, Form } from './styles/footerStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<RFooter>
				<Features>
					<Brand>
						<img src="image/visa.svg" alt="" />
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt omnis unde
							id veniam repellat itaque ex, nihil accusantium facere ab excepturi obcaecati? Fugit,
							quidem dolorum assumenda obcaecati incidunt veniam.
						</p>
					</Brand>
				</Features>

				<Features>
					<h2>Products</h2>
					<Box>
						<li>
							<a href="#!">Product 1</a>
						</li>
						<li>
							<a href="#!">Product 2</a>
						</li>
						<li>
							<a href="#!">Product 3</a>
						</li>
					</Box>
				</Features>

				<Features>
					<h2>Developers</h2>
					<Box className="box h-box">
						<li>
							<a href="#!">Blog</a>
						</li>
						<li>
							<a href="#!">Pricing</a>
						</li>
						<li>
							<a href="#!">Sales</a>
						</li>
						<li>
							<a href="#!">Tickets</a>
						</li>
					</Box>
				</Features>

				<Features>
					<h2>Company</h2>
					<Box>
						<li>
							<a href="#!">Privacy Policy</a>
						</li>
						<li>
							<a href="#!">Terms of Use</a>
						</li>
						<li>
							<a href="#!">Contract</a>
						</li>
					</Box>
				</Features>

				<Features>
					<h2>Newsletter</h2>
					<Box>
						<Form>
							<input type="text" placeholder="Your Email" />
						</Form>
					</Box>
				</Features>
			</RFooter>
			<BFooter>
				<p>All rights reserved by ©VISA 2021 </p>
			</BFooter>
		</FooterWrapper>
	);
};

export default Footer;
