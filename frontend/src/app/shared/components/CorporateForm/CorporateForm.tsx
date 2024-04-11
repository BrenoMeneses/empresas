import { useState, Fragment } from "react"
import { Box, Stepper, Step, StepLabel, Button, Typography } from "@mui/material"
import { UserFields } from "./UserFields"
import { CorporateFields } from "./CorporateFields"
import { AddressFields } from "./AddressFields"

const steps = ["Informações do usuário", "informações da empresa", "endereço"]

let newUser = {}
export function FormCorporate() {
  const [activeStep, setActiveStep] = useState(0)

  const HandleNext = (data: any) => {
    newUser = { ...newUser, ...data }
    console.log(newUser)
    setActiveStep((activeStep) => activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1)
  }

  const handleReset = () => {
    newUser = {}
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: "50%", margin: "auto", padding: 1 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography component="div" sx={{ mt: 2, mb: 1 }}>

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 400 }} >
              All steps completed - you're finished
            </Box>

          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <Button color="primary" sx={{ width: "30%" }} onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Typography component="div" sx={{ mt: 2, mb: 1 }}>
            {activeStep + 1 === 1 && (
              <UserFields
                value={newUser}
                activeStep={activeStep}
                HandleNext={HandleNext}
                HandleBack={handleBack}
              />
            )}
            {activeStep + 1 === 2 && (
              <CorporateFields
                activeStep={activeStep}
                HandleNext={HandleNext}
                HandleBack={handleBack}
              />
            )}
            {activeStep + 1 === 3 && (
              <AddressFields
                activeStep={activeStep}
                HandleNext={HandleNext}
                HandleBack={handleBack}
              />
            )}
          </Typography>
        </Fragment>
      )}
    </Box>
  )
}
