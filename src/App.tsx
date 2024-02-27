import { useState, useEffect } from 'react';
import { Wordle } from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
	fetch('http://localhost:3000/solutions')
	 .then(res => res.json())
	 .then(json => {
		const randomSolution= json[Math.floor(Math.random()*json.length)];
		setSolution(randomSolution.word);
		})}, [setSolution]);
  return (
    <>
			<h1>وُوردي</h1>
			<Wordle solution={solution} />

    </>
  )
}

export default App
