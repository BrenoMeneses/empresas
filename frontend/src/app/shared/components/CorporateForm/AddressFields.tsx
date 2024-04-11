import { TextField, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface propUserFields {
  HandleNext: (data: any) => void
  HandleBack: () => void
  activeStep: number
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

const steps = ["Informações do usuário", "informações da empresa", "endereço"];
export function AddressFields({ activeStep, HandleNext, HandleBack}: propUserFields) {
  const { register, handleSubmit, formState: { errors } } = useForm<AddressFieldsValue>({ resolver: yupResolver(AddressFieldSchema) })

  const onSubmit = (data: AddressFieldsValue) => {
    HandleNext(data)
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
        sx={{ marginY: 2, width: 416 }}
        {...register("zipCode")}
      />
      <TextField
        error={errors.street?.message ? true : false}
        helperText={errors.street?.message}
        variant="outlined"
        label="Nome da rua"
        type="text"
        sx={{ marginY: 2, width: 416 }}
        {...register("street")}
      />
        <TextField
          error={errors.number?.message ? true : false}
          helperText={errors.number?.message}
          variant="outlined"
          label="Número"
          type="number"
          {...register("number")}
          sx={{ marginX: 1, marginY: 2, width: 416 }}
        />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={HandleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button type="submit" color="primary" variant="outlined">
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  )
}