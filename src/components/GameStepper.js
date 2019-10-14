import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { useGame } from 'game'

export default function GameStepper() {
  const { step, firstChoiceIndex, secondChoiceIndex, prizeIndex } = useGame()
  let step1label = 'Choose a Door'
  if (step !== 0) step1label = `Chose Door ${firstChoiceIndex + 1}`
  let step2label = 'Switch or Stay'
  let step3label = 'Results'
  if (step === 2) {
    if (firstChoiceIndex === secondChoiceIndex) step2label = `Stayed with ${secondChoiceIndex + 1}`
    else step2label = `Switched to ${secondChoiceIndex + 1}`
    if (secondChoiceIndex === prizeIndex) step3label = 'You Won'
    else step3label = 'You Lost'
  }
  return (
    <div>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>{step1label}</StepLabel>
        </Step>
        <Step>
          <StepLabel>{step2label}</StepLabel>
        </Step>
        <Step>
          <StepLabel>{step3label}</StepLabel>
        </Step>
      </Stepper>
    </div>
  )
}
