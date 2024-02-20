import { useState } from 'react';

export const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([]) // each guess is an array
	const [history, setHistory] = useState([]) // each guess is a sttring
	const [isCorrect, setIsCorrect] = useState(false);

	// format aguess [{key: 'a', color: 'yellow'})
	const formatGuess = () => {
		const solutionArray = [...solution];
		const formattedGuess = [...currentGuess].map((l) => {
			return {
				key: l,
				color: 'gray'
			}
		});

		formattedGuess.forEach((l, i) => {
			if(solutionArray[i] === l.key){
				formattedGuess[i].color = 'green';
				solutionArray[i] = null;
			}
		});

		formattedGuess.forEach((l, i) => {
			if(solutionArray.includes(l.key) && l.color !== 'green') {
				formattedGuess[i].color = 'yellow';
				solutionArray[solutionArray.indexOf(l.key)] = null;
			}
		});
		
		return formattedGuess;
	}


	//add a new guess to the guesses state
	// update the isCorrect 
	// add one to the turn 
	const addNewGuess = () => {

	}


	// handle keyup event 
	const handleKeyup = ({key}) => {

		if(key === 'Enter') {
			//only 5 turns 
			if(turn > 5) {
				console.log('استنفدت عدد المحالولاتط');
				return
			}
			// do not allow duplicate words
			if(history.includes(currentGuess)) {
				console.log('خمنت هذه الكلمة من قبل');
				return
			}
			// word must be 5 letters
			if(currentGuess.length !== 5) {
				console.log('الكلمة يجب ان تتكون من خمسة أحرف');
				return
			}
		
		const formatted = formatGuess();
		console.log(formatted);

		}


		if(key === 'Backspace') {
			setCurrentGuess(prev => prev.slice(0, -1))
			return
		}
		if(/^[أ-ي]$/.test(key)) {
			if(currentGuess.length < 5 ) {
				setCurrentGuess(prev => prev + key)
			}
		}
	}

	return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

