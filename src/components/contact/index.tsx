import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import S from "./contact.styled";
import { Button } from "../buttons";

const Contact = () => {
  const loginSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    message: yup.string().required("Required"),
    // name: yup.string().required("Required"),
    // email: yup.string().email().required("Required"),
    // message: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const successCallback = (formData: FieldValues) => {
    console.log(formData);

    const templateParams: any = {
      to_name: "Raviprasad",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send("service_l407wpn", "template_bg9574f", templateParams, "uJ5uYtyHSgZtW0LHz").then(
      (result) => {
        console.log(result.text);
        console.log(result);
        reset();
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <S.ContactContainer id="Contact">
      <S.ContactHeader>
        <S.MainText>CONTACT</S.MainText>
        <S.SubText>Don't be shy! Hit me up!</S.SubText>
      </S.ContactHeader>
      <S.FormContainer onSubmit={handleSubmit(successCallback)}>
        <S.TopSection>
          <S.Name {...register("name")} label="Name" variant="outlined" />
          <S.Email {...register("email")} label="Email" variant="outlined" />
        </S.TopSection>
        <S.Message {...register("message")} multiline rows={5} label="Message" variant="outlined" />

        <Button
          buttonProps={{
            type: "submit",
          }}
        >
          Submit
        </Button>
        {errors.name?.message}
        {errors.email?.message}
        {errors.message?.message}
      </S.FormContainer>
    </S.ContactContainer>
  );
};

export default Contact;
