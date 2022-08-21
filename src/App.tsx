import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const App: React.FC = () => {
  const [meanings, setMeanings] = useState<IWord[]>([])

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

  return <div className='App'>Dico</div>
}

export default App
