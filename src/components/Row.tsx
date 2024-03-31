import { formatLetters, formatCurrentGuess } from '../util/formatWords.ts';
import { FC } from 'react';

interface Props {
	guesses?: [],
	currentGuess?: string 
}

		
export const Row :FC<Props> = ({guesses, currentGuess}) => {
	if(guesses) {
		const formattedGuess = formatLetters(guesses);
		return (
			<div className="row past">
				{ formattedGuess?.map((l, i) => (
                    <div 
                    key={i} 
                    className={l.color + ' border border-primary'}>
                    {l.key}
                    </div>

                ))}
			</div>
		)
	}

	if(currentGuess) {
		const letters = currentGuess.split('');
		const formattedCurrentGuess = formatCurrentGuess(letters);
		console.log('curentGuess........', letters);	
		return (
			<div className="row current">
				{formattedCurrentGuess.map((l, i) => (
					<div key={i} className="border border-primary filled">{l}</div>
				)
			)}
			{[...Array(5 - letters.length)].map(( _, i) => (
				<div key={i}></div>
			))}
			</div>
		)
	}

	return (
		<div className="row child-borders">
				<div className="border border-primary"></div>
				<div  className="border border-primary"></div>
				<div  className="border border-primary"></div>
				<div  className="border border-primary"></div>
				<div className="border border-primary"></div>
		</div>
	)
}	


