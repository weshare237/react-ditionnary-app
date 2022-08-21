import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Container } from '@mui/system'
import Header from './components/Header/Header'

const App: React.FC = () => {
  const [meanings, setMeanings] = useState<IWord[]>([])
  const [language, setLanguage] = useState<string>('en')

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/ugly'
      )
      setMeanings(data)
    } catch (error: any) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div
      className='App'
      style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}
    >
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header language={language} setLanguage={setLanguage} />
      </Container>
    </div>
  )
}

export default App
