
import { Row}  from './Row';



export const Grid = ({ guesses, currentGuess, turn}) => {
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
