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

  const handleSave = (e, { name }) => {
    dispatch(handleSaveQuestion({ author: authedUser, optionOneText, optionTwoText }))
    history.push('/')
  }

  return (
    <Grid columns={1} rows={3}>
      <Grid.Row>
        <h1>Would you rather ...</h1>
      </Grid.Row>
      <Grid.Row>
        <Input
          placeholder='Option One'
          onChange={(e, { value }) => setOptionOneText(value)}
        />
      </Grid.Row>
      <Grid.Row>
        <Input
          placeholder='Option Two'
          onChange={(e, { value }) => setOptionTwoText(value)}
        />
      </Grid.Row>
      <Grid.Row>
        <Button onClick={handleSave}>Save</Button>
      </Grid.Row>
    </Grid>
  )
}