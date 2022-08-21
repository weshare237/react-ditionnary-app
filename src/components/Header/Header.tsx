import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import './Header.css'
import languages from '../../data/language'

interface Props {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ language, setLanguage }) => {
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
      <span className='title'>Thinklio</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField
            id='outlined-select-currency'
            select
            label='Select'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            helperText='Please select your language'
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
