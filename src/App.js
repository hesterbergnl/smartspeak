import { useState, useEffect } from 'react'
import KeyForm from './components/KeyForm'
import SentenceForm from './components/SentenceForm'
import SmartText from './components/SmartText'
import OpenAIAPIService from './services/OpenAIAPIService.js'


const App = () => {
  const [smartSentence, setSmartSentence] = useState('')
  const [sentenceEntry, setSentenceEntry] = useState('')
  const [keyEntry, setKeyEntry] = useState('')

  const updateSentenceEntry = (event) => {
    setSentenceEntry(event.target.value)
  }

  const updateKeyEntry = (event) => {
    setKeyEntry(event.target.value)
  }

  const makeSmartSentence = (event) => {
    event.preventDefault()

    console.log(`Make the following sentence sound smarter "${sentenceEntry}"`)
    const button = document.getElementById('submit-button')

    button.disabled = true

    OpenAIAPIService.getSmart(sentenceEntry, keyEntry)
      .then(response => {
        console.log(response)
        setSmartSentence(response.choices[0].message.content)
        button.disabled = false
      })


  }

  return (
    <div>
      <h2>Smart Speak</h2>
      <KeyForm keyEntry={keyEntry} updateKeyEntry={updateKeyEntry}/>
      <SentenceForm updateSentenceEntry={updateSentenceEntry} sentenceEntry={sentenceEntry} smartSentence={makeSmartSentence}/>
      <SmartText smartSentence={smartSentence} />
    </div>
  )
}

export default App
