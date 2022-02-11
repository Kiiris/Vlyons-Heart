import axios from 'axios'
import React, {useState, useEffect} from 'react'

const CreateMessage = (props) => {
  const [message, setMessage] = useState('')
const handleChange = (e) => {
  setMessage(e.target.value)

}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(`http://localhost:8000/message/`,{
    content: message,
    conversation: 'something here'
  })
} 

  return(
    <div></div>
  )
}

export default CreateMessage