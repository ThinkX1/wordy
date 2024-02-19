import { useState, useEffect } from 'react'

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
	fetch('http://localhost:3000/solutions')
	 .then(res => res.json())
	 .then(json => {
		console.log(json);
		const randomSolution= json[Math.floor(Math.random()*json.length)];
		setSolution(randomSolution.word);
		})}, [setSolution]);
  return (
    <>
	<h1>وُوردي</h1>
	{solution && <p>Solution is: {solution}</p>}
    </>
  )
}

export default App
