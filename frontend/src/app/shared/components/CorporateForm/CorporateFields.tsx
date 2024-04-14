import { TextField, Box, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { IMaskInput } from 'react-imask'
import { yupResolver } from "@hookform/resolvers/yup"
import { cnpj } from 'cpf-cnpj-validator'
import * as yup from "yup"
import React from "react";

interface propUserFields {
  HandleNext: (data: any) => void
  HandleBack: () => void
  activeStep: number
  value: any
}

interface CorporateFieldsValue {
  corporateName: string
  cnpj: string
  phone: string
}

const corporateFieldSchema = yup.object({
  corporateName: yup.string().required("campo obrigatório"),
  cnpj: yup.string().required("campo obrigatório").test('cnpjValido', 'CNPJ inválido', (value) => { return cnpj.isValid(value) }),
  phone: yup.string().required("campo obigatório").length(15, "telefone precisa ter 14 caracteres")
})

export function CorporateFields({ activeStep, HandleNext, HandleBack, value }: propUserFields) {
  const { register, handleSubmit, formState: { errors } } = useForm<CorporateFieldsValue>({ resolver: yupResolver(corporateFieldSchema) })

  const onSubmit = (data: CorporateFieldsValue) => {
    HandleNext(data)
  }
  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
      <TextField
        error={errors.corporateName?.message ? true : false}
        helperText={errors.corporateName?.message}
        variant="outlined"
        label="Nome da empresa"
        type="text"
        defaultValue={value.corporateName || ""}
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
        {...register("corporateName")}
      />
      <TextField
        inputProps={{}}
        error={errors.cnpj?.message ? true : false}
        helperText={errors.cnpj?.message}
        InputProps={{ inputComponent: MaskCnpjInput as any }}
        variant="outlined"
        label="cnpj"
        type="text"
        defaultValue={value.cnpj || ""}
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
        {...register("cnpj")}
      />
      <TextField
        error={errors.phone?.message ? true : false}
        helperText={errors.phone?.message}
        InputProps={{ inputComponent: MaskPhoneInput as any }}
        variant="outlined"
        label="telefone"
        type="text"
        defaultValue={value.phone || ""}
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
        {...register("phone")}
      />
      <Box sx={{ width: "90%", display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={HandleBack}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button type="submit" color="primary" variant="outlined">
          Próximo
        </Button>
      </Box>
    </Box>
  )
}

const MaskCnpjInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  const { ...other } = props
  return (
    <IMaskInput mask="00.000.000/0000-00" {...other} inputRef={ref} />
  )
})

const MaskPhoneInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  const { ...other } = props
  return (
    <IMaskInput mask="(00) 00000-0000" {...other} inputRef={ref} />
  )
})
