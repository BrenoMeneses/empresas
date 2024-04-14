import { TextField, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface propUserFields {
  HandleNext: (data: any) => void
  HandleBack: () => void
  HandleRegister: () => void
  activeStep: number
  value: any
}

interface AddressFieldsValue {
  zipCode: string
  street: string
  number: string
}

const AddressFieldSchema = yup.object({
  zipCode: yup.string().required("campo obrigatório"),
  street: yup.string().required("campo obrigatório"),
  number: yup.string().required("campo obigatório")
})

export function AddressFields({ activeStep, HandleNext, HandleBack, HandleRegister, value}: propUserFields) {
  const { register, handleSubmit, formState: { errors } } = useForm<AddressFieldsValue>({ resolver: yupResolver(AddressFieldSchema) })

  const onSubmit = (data: AddressFieldsValue) => {
    HandleNext(data)
    HandleRegister()
  }
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        error={errors.zipCode?.message ? true : false}
        helperText={errors.zipCode?.message}
        variant="outlined"
        label="CEP"
        type="text"
        defaultValue={ value.zipCode || ""}
        sx={{ marginY: 2, width: {xs: "90%", md: "70%"} }}
        {...register("zipCode")}
      />
      <TextField
        error={errors.street?.message ? true : false}
        helperText={errors.street?.message}
        variant="outlined"
        label="Nome da rua"
        type="text"
        defaultValue={ value.street || ""}
        sx={{ marginY: 2, width: {xs: "90%", md: "70%"} }}
        {...register("street")}
      />
        <TextField
          error={errors.number?.message ? true : false}
          helperText={errors.number?.message}
          variant="outlined"
          label="Número"
          type="number"
          defaultValue={ value.number || ""}
          sx={{ marginY: 2, width: {xs: "90%", md: "70%"} }}
          {...register("number")}
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
          Finalizar
        </Button>
      </Box>
    </Box>
  )
}