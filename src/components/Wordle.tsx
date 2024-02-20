import { useEffect } from 'react';
import { useWordle } from '../hooks/useWordle';


export const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		return () => window.removeEventListener('keyup', handleKeyup)
	}, [handleKeyup]);


	return (
		<div>
			<p> {solution} , Current Guess - {currentGuess} </p>
		</div>
	)
}


