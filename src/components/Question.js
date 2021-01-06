import React from 'react'
import { useSelector } from 'react-redux'

export default function Question(props) {

  const { id } = props

  const authedUser = useSelector(state => state.authedUser)
  const answer = authedUser.answers[id]
  const question = useSelector(state => state.questions[id])

  const optionOneVoteCount = question.optionOne.votes.length
  const optionTwoVoteCount = question.optionTwo.votes.length

  return (
    <div>
      <div>
        WOULD YOU RATHER
      </div>
      <div>
        {question.optionOne.text}
      </div>
      <div>
        OR
      </div>
      <div>
        {question.optionTwo.text}
      </div>
      {answer ? <div>{`Answered: ${optionOneVoteCount} vs ${optionTwoVoteCount}`}</div> : null}
    </div>
  )
}

