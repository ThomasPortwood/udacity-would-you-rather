import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Loader, Image } from 'semantic-ui-react'
import { handleSaveQuestionAnswer } from '../actions/questions'
import NotFoundPage from './NotFoundPage'

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

  if (!question)
    return <NotFoundPage />

  const author = question && users[question.author]
  const answer = users[authedUser].answers[id]
  const { optionOne, optionTwo } = question
  const percentages = calculateOptionPercentages(question)

  return (
    <Segment>
      <h1>{`Would you rather`}</h1>
      <h3>{`by ${author.name}`}</h3>
      <Image
        src={author.avatarURL}
        avatar
      />
      {answer
        ? <div>
          <span>
            {`"${optionOne.text}" has ${optionOne.votes.length} votes (${percentages[0]}%)`}
          </span>
          <br />
          <span>
            {`"${optionTwo.text}" has ${optionTwo.votes.length} votes (${percentages[1]}%)`}
          </span>
          <br />
          <div>
            {`You would rather ${question[answer].text}`}
          </div>
        </div>
        : <div>
          <span>
            <Button
              onClick={() => dispatch(handleSaveQuestionAnswer(id, 'optionOne'))}
              content={question.optionOne.text}
            />
          </span>
          <span>
            <Button
              onClick={() => dispatch(handleSaveQuestionAnswer(id, 'optionTwo'))}
              content={question.optionTwo.text}
            />
          </span>
        </div>}
    </Segment>
  )
}