import { useState } from 'react';

import { words } from '../words';


interface LetterObj {
  [k: string]: string
}


export const useWordle = (solution: string) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
	const [history, setHistory] = useState([...Array('')]) // each guess is a sttring
	const [isCorrect, setIsCorrect] = useState(false);

	const [usedKeys, setUsedKeys] = useState<LetterObj>({});

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
				solutionArray[i] = '';
			}
		});

		formattedGuess.forEach((l, i) => {
			if(solutionArray.includes(l.key) && l.color !== 'green') {
				formattedGuess[i].color = 'yellow';
				solutionArray[solutionArray.indexOf(l.key)] = '';
			}
		});
		
		return formattedGuess;
	}


	//add a new guess to the guesses state
	// update the isCorrect 
	// add one to the turn 
	const addNewGuess = (formattedGuess : {key: string, color: string}[]) => {
		if(currentGuess === solution) {
			setIsCorrect(true);
		}
		setGuesses(prevGuesses => {
			const  newGuesses = [...prevGuesses];
			newGuesses[turn] = formattedGuess ;
			return newGuesses;
		})

		setHistory((prevHistory ) => {
			return[...prevHistory, currentGuess];
		})

		setTurn(prevTurn => {
			return prevTurn + 1
		});
		
		setUsedKeys((prevUsedKeys )  => {
			formattedGuess.forEach((l)  => {
				const currentColor: string = prevUsedKeys[l.key];
				
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
	const handleKeyup = (e: KeyboardEvent) => {
    const { key } = e;

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

