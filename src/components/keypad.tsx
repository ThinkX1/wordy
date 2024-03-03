export function Keypad({usedKeys}) {

	const letters = [ "ذ", "ض", "ص", "ث", "ق", "ف", "غ", "هـ", "خ", "ح", "ج", "د", "ش", "س", "ي", "ب", "ل", "ا", "أ", "إ", "ت", "ن", "م", "ك", "ط", "ئ", "ء", "ؤ", "ر", "ى", "ة", "و", "ز", "ظ" ];

  console.log('keypad ===> usedKeys', usedKeys);
	return (	
		<div className="keypad">
			{ letters.map( l => {
					const color = usedKeys[l];
					return (
						<div key={l} className={color}>{l}</div>
					)
			})}
		</div>
		)
};
