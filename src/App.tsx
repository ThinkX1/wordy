import { Wordle } from './components/Wordle';
import { words } from './words';

function App() {

		const randomSolution = words[Math.floor(Math.random()*words.length)];
		console.log(randomSolution)
  return (
    <>
			<h1>وُوردي</h1>
			<Wordle solution={randomSolution} />

    </>
  )
}

export default App
