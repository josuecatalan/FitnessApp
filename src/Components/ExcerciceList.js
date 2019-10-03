import React from 'react';
import Card from './Card';

const ExcerciceList = ({ exercices }) => (
	<div>
		{exercices.map(exercice => (
			<Card
				key={exercice.id}
				title={exercice.title}
				description={exercice.description}
				img={exercice.img}
				leftColor={exercice.leftColor}
				rightColor={exercice.rightColor}
			/>
		))}
	</div>
);

export default ExcerciceList;
