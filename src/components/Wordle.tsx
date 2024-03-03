import { useEffect } from 'react';
import { useWordle } from '../hooks/useWordle';
import { Grid } from './Grid';
import { Keypad } from './keypad';

export const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys	 } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		return () => window.removeEventListener('keyup', handleKeyup)
	}, [handleKeyup]);


	return (
		<div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			<Keypad usedKeys = {usedKeys}/>
		</div>
	)
}


