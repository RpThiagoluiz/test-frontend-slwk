import { useState } from "react";

//Styles
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  TextCheckBox,
} from "./styles";
//Icon
import checkIcon from "../../assets/icons/checked.svg";

const Checkbox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={checked}>
        <img src={checkIcon} alt="Checked" />
      </StyledCheckbox>
      <TextCheckBox checked={checked}>{text}</TextCheckBox>
    </CheckboxContainer>
  );
};
export default Checkbox;
