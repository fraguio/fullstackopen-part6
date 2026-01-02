import { useDispatch, useSelector } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList= () => {

  const anecdotes = useSelector(state => [...state.anecdotes].filter(item => item.content.toLowerCase().includes(state.filter)).sort((a, b) => b.votes - a.votes));
    
  const dispatch = useDispatch();

  const vote = anecdote =>  {
      dispatch(voteAnecdote(anecdote.id))
      dispatch(notify(`you voted '${anecdote.content}'`, 5))
  }
  return (
    <>{anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}</>)
  
}
export default AnecdoteList