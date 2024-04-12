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
    setActiveStep((activeStep) => activeStep + 1)
  }

  const HandleCad = () => {
    console.log(newUser)
    fetch("http://localhost:8080/client/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  }

  const HandleBack = () => {
    setActiveStep((activeStep) => activeStep - 1)
  }

  const handleReset = () => {
    newUser = {}
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto", padding: 1, boxSizing: { xs: "border-box" } }}>
      <Stepper sx={{ width: "100%" }} activeStep={activeStep}>
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
              Cadastro finalizado
            </Box>

          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <Button color="primary" sx={{ width: "30%" }} onClick={handleReset}>
              Reset
            </Button>
            <Button color="primary" sx={{ width: "30%" }} onClick={handleReset}>
              Ver lista
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
                HandleBack={HandleBack}
              />
            )}
            {activeStep + 1 === 2 && (
              <CorporateFields
                value={newUser}
                activeStep={activeStep}
                HandleNext={HandleNext}
                HandleBack={HandleBack}
              />
            )}
            {activeStep + 1 === 3 && (
              <AddressFields
                value={newUser}
                activeStep={activeStep}
                HandleNext={HandleNext}
                HandleBack={HandleBack}
                HandleCad={HandleCad}
              />
            )}
          </Typography>
        </Fragment>
      )}
    </Box>
  )
}
