import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { useHistory } from 'react-router-dom'

export default function AddQuestion(props) {

  const history = useHistory()
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')

  const dispatch = useDispatch()
  const authedUser = useSelector(state => state.authedUser)
  const author = authedUser.id

  function handleSave() {
    dispatch(handleSaveQuestion({ author, optionOneText, optionTwoText }))
    history.push('/')
  }

  return (
    <div>
      <input type='text' onChange={(e) => setOptionOneText(e.target.value)} />
      <input type='text' onChange={(e) => setOptionTwoText(e.target.value)} />
      <button onClick={handleSave}>Something</button>
    </div>
  )
}