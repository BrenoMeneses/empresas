import { TextField, Box, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IMaskInput } from 'react-imask'
import * as yup from "yup"
import React from "react"
import { text } from "stream/consumers"

interface propUserFields {
  HandleNext: (data: any) => void
  HandleBack: () => void
  activeStep: number
}

interface CorporateFieldsValue {
  corporateName: string
  cnpj: string
  phone: string
}

const corporateFieldSchema = yup.object({
  corporateName: yup.string().required("campo obrigatório"),
  cnpj: yup.string().required("campo obrigatório"),
  phone: yup.string().required("campo obigatório")
})

export function CorporateFields({ activeStep, HandleNext, HandleBack }: propUserFields) {
  const { register, handleSubmit, formState: { errors } } = useForm<CorporateFieldsValue>({ resolver: yupResolver(corporateFieldSchema) })

  const onSubmit = (data: CorporateFieldsValue) => {
    HandleNext(data)
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
      <TextField
        error={errors.corporateName?.message ? true : false}
        helperText={errors.corporateName?.message}
        variant="outlined"
        label="Nome da empresa"
        type="text"
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
        {...register("corporateName")}
      />
      <TextField

        error={errors.cnpj?.message ? true : false}
        helperText={errors.cnpj?.message}
        variant="outlined"
        label="cnpj"
        type="text"
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
        {...register("cnpj")}
      />
      <TextField
        error={errors.phone?.message ? true : false}
        helperText={errors.phone?.message}
        inputProps={{}}
        variant="outlined"
        label="phone"
        type="text"
        {...register("phone")}
        sx={{ marginY: 2, width: { xs: "90%", md: "70%" } }}
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
