import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import './Header.css'
import languages from '../../data/language'

interface Props {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  word: string
  setWord: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ language, setLanguage, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  })

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Thinklio'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            label='Search a word'
            variant='outlined'
            className='search'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label='Language'
            className='select'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((language: Language) => (
              <MenuItem key={language.label} value={language.label}>
                {language.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
