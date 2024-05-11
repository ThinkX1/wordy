import { useEffect, useState, FC } from 'react';
import { useWordle } from '../hooks/useWordle';
import { Grid } from './Grid';
//import { Keypad } from './keypad';
import { Keypad } from './keypad';
import { ResultModal } from './ResultModal';

interface Props {
	solution: string
}

export const Wordle : FC<Props> = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys	 } = useWordle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		if(isCorrect) {

			setTimeout(() => setShowModal(true), 2000);
      console.log(isCorrect, showModal);
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
			{ showModal && <ResultModal isOpen={true} onClese={() => console.log('colse')}  solution={solution} /> }
      <Keypad usedKeys={usedKeys}/>
		</div>
	)
}


