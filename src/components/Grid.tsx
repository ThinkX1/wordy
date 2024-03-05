import { FC }  from 'react';
import { Row}  from './Row';

interface Props {
	guesses : [];
	currentGuess : string[];
	turn: number
}	



export const Grid: FC<Props> = ({ guesses, currentGuess, turn}) => {
		console.log('grid', turn ,currentGuess);
		return (
			<div>
			{guesses.map((g,i) => {
				if(turn === i){
					return <Row key={i} currentGuess={currentGuess} />
				}
				return <Row key={i} guess={g}  />
			})}
			</div>
		)
}
