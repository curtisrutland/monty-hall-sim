import React, { useEffect, useCallback }  from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Scoreboard from './Scoreboard'
import GameBoard from './GameBoard'
import { useGame } from 'game'

const useStyles = makeStyles(theme => ({
  wrapper: {
    maxWidth: 1300,
    margin: '0 auto',
    padding: theme.spacing(2)
  },
  grid: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateAreas: `"game scoreboard"`,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
        "game"
        "scoreboard"
      `
    }
  }
}))

export default function Game() {
  const classes = useStyles()
  const { setDebug } = useGame()
  const setDebugCallback = useCallback(setDebug, [])
   
  useEffect(() => {
    console.log('To enable debug mode, type setDebugMode(true)')
    window.setDebugMode = setDebugCallback
  }, [setDebugCallback])

  return (
    <div className={classes.wrapper}>
      <main className={classes.grid}>
        <GameBoard />
        <Scoreboard />
      </main>
    </div>
  )
}
