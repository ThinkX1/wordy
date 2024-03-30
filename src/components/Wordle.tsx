import { useEffect, useState, FC } from 'react';
import { useWordle } from '../hooks/useWordle';
import { Grid } from './Grid';
//import { Keypad } from './keypad';
import { Modal } from './Modal';

interface Props {
	solution: string
}

export const Wordle : FC<Props> = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, turn, isCorrect	 } = useWordle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		if(isCorrect) {

			setTimeout(() => setShowModal(true), 2000);
			window.removeEventListener('keyup', handleKeyup);
		}

		if(turn > 5) {
			setTimeout(() => setShowModal(true), 2000);
			window.removeEventListener('keyup', handleKeyup);
		} 

		return () => window.removeEventListener('keyup', handleKeyup)
	}, [handleKeyup, isCorrect, turn]);


	return (
		<div>
			<Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
			{ showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} /> }
		</div>
	)
}


