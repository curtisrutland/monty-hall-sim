import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import GameStepper from './GameStepper'
import GameMessage from './GameMessage'
import GameButtons from './GameButtons'
import GameBoardActions from './GameBoardActions'

const useStyles = makeStyles(theme => ({
  spacer: { flex: 1 },
  wrapper: { gridArea: 'game' },
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  card: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default function GameBoard() {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <GameMessage />
          <GameButtons />
          <GameStepper />
        </CardContent>
        <GameBoardActions />
      </Card>
    </div>
  )
}
