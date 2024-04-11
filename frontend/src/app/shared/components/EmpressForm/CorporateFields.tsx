import { TextField, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface CorporateFields {
  corporateName: string;
  cnpj: string;
  phone: string;
}

interface propUserFields {
  HandleNext: (data: any) => void;
  HandleBack: () => void;
  activeStep: number;
}

const corporateFieldSchema = yup.object({
  corporateName: yup.string().required("campo obrigatório"),
  cnpj: yup.string().required("campo obrigatório"),
  phone: yup.string().required("campo obigatório"),
})

const steps = ["Informações do usuário", "informações da empresa", "endereço"];
export function CorporateFields({ activeStep, HandleNext, HandleBack}: propUserFields) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(corporateFieldSchema) })

  const onSubmit = (data: any) => {
    console.log(data)
    HandleNext(data)
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        error={errors.corporateName?.message ? true : false}
        helperText={errors.corporateName?.message}
        variant="outlined"
        label="Nome da empresa"
        type="text"
        sx={{ marginY: 2, width: 416 }}
        {...register("corporateName")}
      />
      <TextField
        error={errors.cnpj?.message ? true : false}
        helperText={errors.cnpj?.message}
        variant="outlined"
        label="cnpj"
        type="text"
        sx={{ marginY: 2, width: 416 }}
        {...register("cnpj")}
      />
        <TextField
          error={errors.phone?.message ? true : false}
          helperText={errors.phone?.message}
          variant="outlined"
          label="phone"
          type="text"
          {...register("phone")}
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