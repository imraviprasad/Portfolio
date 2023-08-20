import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import S from "./contact.styled";
import { Button } from "../buttons";

const Contact = () => {
  const loginSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    message: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const successCallback = (formData: FieldValues) => {
    console.log(formData);
  };

  return (
    <S.ContactContainer>
      <S.ContactHeader>
        <S.MainText>CONTACT</S.MainText>
        <S.SubText>Don't be shy! Hit me up!</S.SubText>
      </S.ContactHeader>
      <S.FormContainer onSubmit={handleSubmit(successCallback)}>
        <S.TopSection>
          <S.Name id="outlined-basic" {...register("name")} label="Name" variant="outlined" />
          <S.Email id="outlined-basic" {...register("email")} label="Email" variant="outlined" />
        </S.TopSection>
        <S.Message id="outlined-basic" {...register("message")} multiline rows={7} label="Message" variant="outlined" />

        <Button
          buttonProps={{
            type: "submit",
          }}
        >
          Submit
        </Button>
      </S.FormContainer>
    </S.ContactContainer>
  );
};

export default Contact;
