import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import { useGame } from 'game'

const useStyles = makeStyles(theme => ({
  reset: { color: theme.palette.error.main },
  actions: { justifyContent: 'flex-end' },
  card: { margin: theme.spacing(1) },
  wrapper: { gridArea: 'scoreboard' }
}))

const pct = val =>
  isNaN(val)
    ? '--'
    : new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(val)

function TooltipCell({ children, title, align = 'right', placement = 'top' }) {
  return (
    <TableCell align={align}>
      <Tooltip title={title} placement={placement}>
        <span>{children}</span>
      </Tooltip>
    </TableCell>
  )
}

function Row({ label, wins, count }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {label}
      </TableCell>
      <TableCell align="right">{wins}</TableCell>
      <TableCell align="right">{count - wins}</TableCell>
      <TableCell align="right">{count}</TableCell>
      <TableCell align="right">{pct(wins / count)}</TableCell>
    </TableRow>
  )
}

export default function Scoreboard() {
  const classes = useStyles()
  const { switched, stayed, switchedWins, stayedWins, resetScore } = useGame()
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <Table aria-label="scoreboard table" size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TooltipCell title="Wins">W</TooltipCell>
              <TooltipCell title="Losses">L</TooltipCell>
              <TooltipCell title="Total">T</TooltipCell>
              <TooltipCell title="Percent">%</TooltipCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row label="Switched" wins={switchedWins} count={switched} />
            <Row label="Stayed" wins={stayedWins} count={stayed} />
            <Row label="Total" wins={stayedWins + switchedWins} count={stayed + switched} />
          </TableBody>
        </Table>
        <CardActions className={classes.actions}>
          <Button className={classes.reset} size="small" onClick={resetScore}>
            Reset
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
