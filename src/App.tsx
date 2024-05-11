import { Header } from './components/Header';
import { ResultModal } from './components/ResultModal';
import { Wordle } from './components/Wordle';
import { words } from './words';

function App() {

		const randomSolution = words[Math.floor(Math.random()*words.length)];
		console.log(randomSolution)
  return (
    <>
      <Header />
			<Wordle solution={randomSolution} />
      <ResultModal isOpen={false} onClose={()=> console.log('closed')} solution={randomSolution} />

    </>
  )
}

export default App
