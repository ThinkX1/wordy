import { FC } from 'react'


interface LettersObj {
[key: string]: string;
}
interface Props {
	usedKeys: LettersObj;
}



export const  Keypad : FC<Props> = ({usedKeys}) =>  {

	const letters = [ "ذ", "ض", "ص", "ث", "ق", "ف", "غ", "هـ", "خ", "ح", "ج", "د", "ش", "س", "ي", "ب", "ل", "ا", "أ", "إ", "ت", "ن", "م", "ك", "ط", "ئ", "ء", "ؤ", "ر", "ى", "ة", "و", "ز", "ظ", "ئ"];

	console.log('keypad ===> usedKeys', usedKeys);
	return (	
		<div className="keypad">
			{ letters.map( l => {
					const color = usedKeys[l];
					return (
						<div key={l} className={color + ' border border-primary'}>{l}</div>

					)
			})}
		</div>
		)
};
