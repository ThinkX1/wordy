import { useState } from 'react';
import { words } from '../words';

export const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
	const [history, setHistory] = useState([]) // each guess is a sttring
	const [isCorrect, setIsCorrect] = useState(false);

	const [usedKeys, setUsedKeys] = useState({});

	// format aguess [{key: 'a', color: 'yellow'})
	const formatGuess = () => {
		const solutionArray = [...solution];
		const formattedGuess = [...currentGuess].map((l) => {
			return {
				key: l,
				color: 'grey'
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
	const addNewGuess = (formattedGuess) => {
		if(currentGuess === solution) {
			setIsCorrect(true);
		}
		setGuesses(prevGuesses => {
			let newGuesses = [...prevGuesses];
			newGuesses[turn] = formattedGuess ;
			return newGuesses;
		})

		setHistory(prevHistory => {
			return[...prevHistory, currentGuess];
		})

		setTurn(prevTurn => {
			return prevTurn + 1
		});
		
		setUsedKeys(prevUsedKeys => {
			formattedGuess.forEach(l => {
				const currentColor = prevUsedKeys[l.key];
				
				if(l.color === 'green'){
					prevUsedKeys[l.key] = 'green';
					return;
				}
				if(l.color === 'yellow' && currentColor !== 'green') {
					prevUsedKeys[l.key] = 'yellow'
					return;
				}
				if(l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
					prevUsedKeys[l.key] = 'grey'
					return; 
				}
				})

				return prevUsedKeys
			})
		

		setCurrentGuess('');
	}


	// handle keyup event 
	const handleKeyup = ({key}) => {

		if(key === 'Enter') {
			//only 5 turns 
			if(turn > 5) {
				console.log('استنفدت عدد المحالولات');
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

			if(!words.includes(currentGuess)){
				console.log('الكلمة غير موجودة في قائمة المفردات !');
				return;
			}
		
		const formatted = formatGuess();
		addNewGuess(formatted);
		}


		if(key === 'Backspace') {
			setCurrentGuess(prev => prev.slice(0, -1))
			return
		}
		if(/^[ء-ي]$/.test(key)) {
			if(key === "ـ"){
				return;
			}
			if(currentGuess.length < 5 ) {
				setCurrentGuess(prev => prev + key)
			}
		}
	}

	return {turn, currentGuess, guesses, isCorrect, usedKeys,  handleKeyup}
}

