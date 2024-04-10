import { useState, Fragment, SyntheticEvent } from "react"
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material'
import { UserFields, CorporateFields, AddressFields } from "./UserFields"

const steps = ['Informações do usuário', 'informações da empresa', 'endereço']

interface UserFieldsValue {
    name: string
    email: string
    password: string
}

export function FormEmpress() {
    const [activeStep, setActiveStep] = useState(0)
    const [ifStep, setIfStep] = useState(false)
    const [userFieldsValue, setUserFieldsValue] = useState({})
    const [addressFieldsValue, setAddressFieldsValue] = useState({})
    const [corporateFieldsValue, setCorporateFieldsValue] = useState({})

    const updateIfStep = (value: boolean) => {
        setIfStep(value)
    }
    const updateUserFields = (value: UserFieldsValue) => {
        setUserFieldsValue(value)
    }

    const HandleNext = (e: SyntheticEvent) => {
        e.preventDefault()

        const newUser = {
            ...userFieldsValue,
            ...addressFieldsValue,
            ...corporateFieldsValue
        }
        console.log(newUser)
        if(ifStep) {
            setActiveStep((activeStep) => activeStep + 1)
        }
        setIfStep(false)
    }

    const handleBack = () => {
        setActiveStep((activeStep) => activeStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <Box sx={{ width: '50%', margin: "auto", padding: 1 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {}
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Typography component="div" sx={{ mt: 2, mb: 1 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 400 }}>
                            All steps completed - you're finished
                        </Box>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: "center", pt: 2 }}>
                        <Button color="primary" sx={{ width: "30%" }} onClick={handleReset}>Reset</Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    <Typography component="div" sx={{ mt: 2, mb: 1 }}>

                        <Box component="form" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 400 }}>
                            {activeStep + 1 === 1 && <UserFields  updateUser={updateUserFields} updateStep={updateIfStep} />}
                            {activeStep + 1 === 2 && <CorporateFields />}
                            {activeStep + 1 === 3 && <AddressFields />}

                            <Box sx={{ width: "100%", display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }} >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button type="submit" color="primary" variant="outlined" onClick={HandleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    </Typography>
                </Fragment>
            )}
        </Box>
    )
}