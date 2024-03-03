import { useState, useEffect } from 'react';
import { Wordle } from './components/Wordle';
import { wordList } from './wordList';


function App() {
  const [solution, setSolution] = useState(null);

		const randomSolution = wordList[Math.floor(Math.random()*wordList.length)];
		//setSolution(randomSolution.word);

  return (
    <>
			<h1>وُوردي</h1>
			<Wordle solution={randomSolution} />

    </>
  )
}

export default App
