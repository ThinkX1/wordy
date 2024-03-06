import { formatLetters, formatCurrentGuess } from '../util/formatWords.ts';

interface Props {
	guess?: [],
	correntGuess?: []
}

		
export const Row :FC<Props> = ({guess, currentGuess}) => {
	if(guess) {
		let formattedGuess = formatLetters(guess);
		return (
			<div className="row past">
				{ formattedGuess.map((l, i) => (
						<div key={i} className={l.color}>{l.key }</div>

					))}
			</div>
		)
	}

	if(currentGuess) {
		let letters = currentGuess.split('');
		const formattedCurrentGuess = formatCurrentGuess(letters);
		console.log('curentGuess........', letters);	
		return (
			<div className="row current">
				{formattedCurrentGuess.map((l, i) => (
					<div key={i} className="filled">{l}</div>
				)
			)}
			{[...Array(5 - letters.length)].map(( _, i) => (
				<div key={i}></div>
			))}
			</div>
		)
	}

	return (
		<div className="row">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
		</div>
	)
}	


