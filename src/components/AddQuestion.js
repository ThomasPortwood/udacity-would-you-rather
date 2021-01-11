import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { useHistory, Redirect } from 'react-router-dom'
import { Input, Grid, Button } from 'semantic-ui-react'

export default function AddQuestion(props) {

  const history = useHistory()
  const dispatch = useDispatch()
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const authedUser = useSelector(state => state.authedUser)

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  function handleSave() {
    dispatch(handleSaveQuestion({ author: authedUser, optionOneText, optionTwoText }))
    history.push('/')
  }

  return (
    <Grid columns={1}>
      <Grid.Column width={10}>
        <Grid.Row>
          <Input fluid placeholder='Option One' onChange={(e, { value }) => setOptionOneText(value)} />
        </Grid.Row>
        <Grid.Row>
          <Input fluid placeholder='Option Two' onChange={(e, { value }) => setOptionTwoText(value)} />
        </Grid.Row>
        <Grid.Row>
          <Button onClick={handleSave}>Something</Button>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}