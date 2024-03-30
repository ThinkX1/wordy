import { FC } from 'react';



interface Props {
	isCorrect: boolean,
	solution: string,
	turn: number
}
	

export const  Modal: FC<Props> = ({ isCorrect, solution, turn }) => {
	return (
		<div className="modal">
			{ isCorrect && (
				<div>
					<h1> كسبت !! </h1>
					<p className="solution">{solution}</p>
					<p>لقد وجدت الحل في {turn}  محاولات :</p> 
				</div>
			)}
			{!isCorrect && (
				<div>
					<h1> حاول مرة أخرى</h1>
					<p className="solution">{solution}</p>
				</div>
			)}
		</div>
		)
}
