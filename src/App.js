import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
import TitleBar from 'components/TitleBar'
import Game from 'components/Game'
import { GameProvider } from 'game'

export default function App() {
  return (
    <GameProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TitleBar />
        <Game />
      </MuiThemeProvider>
    </GameProvider>
  )
}
