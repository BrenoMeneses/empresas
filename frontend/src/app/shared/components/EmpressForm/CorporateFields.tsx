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
  HandleNext: () => void;
  HandleBack: () => void;
  activeStep: number;
}

const corporateFieldSchema = yup.object({
  corporateName: yup.string().required("campo obrigatório"),
  cnpj: yup.string().required("campo obrigatório"),
  phone: yup.string().required("campo obigatório"),
})

export function CorporateFields({ activeStep, HandleNext, HandleBack}: propUserFields) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(corporateFieldSchema) })

  const onSubmit = (data: any) => {
    console.log(data)
    HandleNext()
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
          sx={{ marginX: 1, marginY: 2, width: 200 }}
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

const userFieldSchema = yup.object({
  name: yup.string().required("campo obrigatório"),
  email: yup.string().required("campo obrigatório").email("emil inválido"),
  password: yup.string().required("campo obrigatório"),
  passConf: yup
    .string()
    .required("campo obrigatório")
    .oneOf([yup.ref("password")], "senhas diferentes"),
});

const steps = ["Informações do usuário", "informações da empresa", "endereço"];
export function UserFields({
  activeStep,
  HandleNext,
  HandleBack,
}: propUserFields) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userFieldSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    HandleNext();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        error={errors.name?.message ? true : false}
        helperText={errors.name?.message}
        variant="outlined"
        label="Nome"
        type="text"
        sx={{ marginY: 2, width: 416 }}
        {...register("name")}
      />
      <TextField
        error={errors.email?.message ? true : false}
        helperText={errors.email?.message}
        variant="outlined"
        label="Email"
        type="email"
        sx={{ marginY: 2, width: 416 }}
        {...register("email")}
      />
      <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          error={errors.password?.message ? true : false}
          helperText={errors.password?.message}
          variant="outlined"
          label="Senha"
          type="password"
          {...register("password")}
          sx={{ marginX: 1, marginY: 2, width: 200 }}
        />
        <TextField
          error={errors.passConf?.message ? true : false}
          helperText={errors.passConf?.message}
          variant="outlined"
          label="Confirme a senha"
          type="password"
          {...register("passConf")}
          sx={{ marginX: 1, marginY: 2, width: 200 }}
        />
      </Box>
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
  );
}
