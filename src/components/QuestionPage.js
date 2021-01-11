import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { handleSaveQuestionAnswer } from '../actions/questions'

function calculateOptionPercentages(question) {
  const { optionOne, optionTwo } = question
  const total = optionOne.votes.length + optionTwo.votes.length
  const optionOnePercentage = 100 * (optionOne.votes.length / total)
  const optionTwoPercentage = 100 - optionOnePercentage
  return [optionOnePercentage, optionTwoPercentage]
}
export default function QuestionPage() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const questionsLoading = useSelector(state => state.questionsLoading)
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  if (questionsLoading)
    return <Loader active />

  const question = questions[id]
  const author = question && users[question.author]
  const answer = users[authedUser].answers[id]
  const { optionOne, optionTwo } = question
  const percentages = calculateOptionPercentages(question)

  return (
    <Segment>
      <h3>Would you rather</h3>
      <span>A poll by {author?.name}</span>
      {answer
        ? <div>
          <div>{`"${optionOne.text}" has ${optionOne.votes.length} votes (${percentages[0]}%)`}</div>
          <div>{`"${optionTwo.text}" has ${optionTwo.votes.length} votes (${percentages[1]}%)`}</div>
        </div>
        : <div>
          <div>
            <Button
              onClick={() => dispatch(handleSaveQuestionAnswer(id, 'optionOne'))}
              content={question.optionOne.text}
            />
          </div>
          <div>
            <Button
              onClick={() => dispatch(handleSaveQuestionAnswer(id, 'optionTwo'))}
              content={question.optionTwo.text}
            />
          </div>
        </div>}
    </Segment>
  )
}