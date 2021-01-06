import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'

export default function QuestionList() {

  const loading = useSelector(state => state.loading)
  const questions = useSelector(state => state.questions)
  const authedUser = useSelector(state => state.authedUser)

  const answered = authedUser ? Object.keys(authedUser.answers) : []
  const unanswered = Object.keys(questions).filter(id => !answered.includes(id))

  return (
    <div>
      <button onClick={() => console.log('here')}>Something</button>
      <ul>
        {!loading && unanswered.map(id => <li key={id}><Question id={id} /></li>)}
      </ul>
    </div>
  )
}