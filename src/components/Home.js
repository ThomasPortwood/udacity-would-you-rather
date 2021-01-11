import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { Card, Grid, Button, Segment } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react'

function filterQuestions(allQuestions, user, whatToDisplay) {

  const keys = Object.keys(allQuestions)
    .sort((a, b) => allQuestions[b].timestamp - allQuestions[a].timestamp)

  const answered = user ? Object.keys(user.answers) : []

  switch (whatToDisplay) {
    case 'Unanswered':
      return keys.filter(id => !answered.includes(id))
    case 'Answered':
      return keys.filter(id => answered.includes(id))
    case 'Asked':
      return keys.filter(id => user.questions.includes(id))
    default:
      return keys
  }
}

export default function Home() {

  const history = useHistory()
  const questionsLoading = useSelector(state => state.questionsLoading)
  const users = useSelector(state => state.users)
  const questions = useSelector(state => state.questions)
  const authedUser = useSelector(state => state.authedUser)
  const [display, setDisplay] = useState('Unanswered')

  const onClick = (e, { name }) => {
    setDisplay(name)
  }

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  return (
    <Grid columns={2}>
      <Grid.Column width={4}>
        <Segment compact>
          <Button.Group vertical>
            <Button
              key='Unanswered'
              name='Unanswered'
              active={display === 'Unanswered'}
              onClick={onClick}
              content='Unanswered' />
            <Button.Or />
            <Button
              key='Answered'
              name='Answered'
              active={display === 'Answered'}
              onClick={onClick}
              content='Answered' />
            <Button.Or />
            <Button
              key='Asked'
              name='Asked'
              active={display === 'Asked'}
              onClick={onClick}
              content='Asked' />
            <Button.Or />
            <Button
              key='All'
              name='All'
              active={display === 'All'}
              onClick={onClick}
              content='All' />
          </Button.Group>
        </Segment>
      </Grid.Column>
      <Grid.Column width={10}>
        {questionsLoading
          ? <Loader active />
          : <Segment compact>
            {filterQuestions(questions, users[authedUser], display).map(id => (
              <Card
                fluid
                key={id}
                onClick={(e) => history.push(`/questions/${id}`)}
                header='Would you rather ...'
                meta={`a poll by ${questions[id].author} at ${(new Date(questions[id].timestamp)).toDateString()}`}
                description={`${questions[id].optionOne.text.toUpperCase()} or ${questions[id].optionTwo.text.toUpperCase()}`}
              />
            ))}
          </Segment>
        }
      </Grid.Column>
    </Grid>
  )
}