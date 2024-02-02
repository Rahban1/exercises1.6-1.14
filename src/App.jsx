import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [show, setShow] = useState(false);

  const voteHandler = ()=>{
    setVote((prevVote)=>{
      const newVote = [...prevVote];
      newVote[selected]+=1;
      return newVote
    })
  }
  const showHandler = ()=>{setShow(true)};
  const maxIndex = vote.indexOf(Math.max(...vote));
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <br />
      <button onClick={()=>{voteHandler(); showHandler();}}>vote</button>
      <button onClick={()=>{setSelected(parseInt(Math.random()*anecdotes.length))}}>next anecdote</button>
      {show && (
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[maxIndex]}
        <p>has {vote[maxIndex]} votes</p>
      </div>)
      }
    </div>
  )
}

export default App