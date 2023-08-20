import React, { FC, MouseEvent, CSSProperties } from "react";
import { CSSObject } from "@emotion/react";
import S from "./button.styled";
import { Variants } from "../../../utils/constants";

interface ButtonProps {
  variant?: Variants.Button;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  children: React.ReactNode;
  customStyle?: CSSProperties | CSSObject;
  disabled?: boolean;
  buttonProps?: any;
}

const Button: FC<ButtonProps> = ({
  variant = Variants.Button.PRIMARY,
  onClick,
  children,
  customStyle,
  disabled = false,
  loading = false,
  buttonProps,
}) => {
  return (
    <S.PrimaryButton onClick={onClick} sx={customStyle} disabled={disabled} type="submit" {...buttonProps}>
      {loading ? <S.CircularLoader size={22} /> : children}
    </S.PrimaryButton>
  );
};

export default Button;
