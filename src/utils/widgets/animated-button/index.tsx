import { FC } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import S from "./animated-button.styled";

type AnimatedButtonProps = {
  handleClick: () => void;
};

const AnimatedButton: FC<AnimatedButtonProps> = ({ handleClick }) => {
  return (
    <S.Button onClick={handleClick}>
      <S.Text>Visit Website</S.Text>
      <NavigateNextIcon />
    </S.Button>
  );
};

export default AnimatedButton;
