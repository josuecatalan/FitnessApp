import React from 'react';

import EmptyImg from '../Images/empty.png';
import CirclesImg from '../Images/circles.png';

import './Styles/Card.css';

const Card = ({ title, description, img, leftColor, rightColor }) => (
	<div
		className='card mx-auto Fitness-Card'
		style={{
			backgroundImage: `url(${CirclesImg}), linear-gradient(to right, ${leftColor ||
				'#52c234'}, ${rightColor || '#061700'})`
		}}
	>
		<div className='card-body'>
			<div className='row center'>
				<div className='col-6'>
					<img src={img || EmptyImg} alt='exercise number' className='float-right' />
				</div>
				<div className='col-6 Fitness-Card-Info'>
					<h1>{title || 'Your Exercise Title'}</h1>
					<p>{description || 'Your Exercise Description'}</p>
				</div>
			</div>
		</div>
	</div>
);

export default Card;
