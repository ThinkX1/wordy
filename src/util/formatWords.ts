
const letters = ["أ" , "ا", "إ", "د", "ذ", "ر", "ز", "و", "ؤ", "ء",];



export const formatLetters = (guess) =>  {
	
	const formattedArray = guess.map((l,i) => {
		if(i === 0 ) {
			if(letters.includes(l.key)) {
				return l;
			} else {
			return { key: guess[i].key + "ـــ", color: guess[i].color }
			}
		} else {

			if(i === 4 && !letters.includes(guess[3].key) ){
				return   { key : "ـ"+ guess[i].key, color: guess[i].color }
			} else if(letters.includes(guess[i - 1].key)) {
					if(letters.includes(l.key) || i === 4) {
						return l
					} 
						console.log('key after lett', l.key, guess[i].key + "ــ");
					return { key: guess[i].key + "ــــ", color: guess[i].color }
			} else  if(letters.includes(l.key)) {
					return { key: "ــ" + guess[i].key , color: guess[i].color}
			} else  {
				console.log('last condition', l.key);	
				return { key : "ــ" + guess[i].key + "ــ", color: guess[i].color}	 
			}
			}
		}
		);
		
	return formattedArray;
};


export const formatCurrentGuess = (guess) =>  {

	const formatted = guess.map((l, i) => {

		if(i === 0) {
			if(letters.includes(l)){
				return l;
			} else if(guess.length > 1) {
				return l + "ـــ";
			} else {
				return l;
			}
		}
		if(i === 4) {
			if(!letters.includes(guess[3])){
				return "ـ" + l;
			} else { 
				return l;
			}
		}

		
		if(letters.includes(l) && !letters.includes(guess[i-1])) {
			return "ــ" + l;
		} else if(letters.includes(guess[i-1]) && guess.length > i + 1 && !letters.includes(l)) {
			return l + "ــ" ;
		} else if(letters.includes(l)) {
			return l;
		} else if(guess.length > i + 1 ){
			return "ــ" + l + "ــ";
		} else if(!letters.includes(guess[i-1])){
			return "ـ" + l;
		} else {
			return l 
		}
		});
	
	return formatted;	
}
