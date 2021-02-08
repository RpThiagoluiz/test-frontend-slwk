import { useState } from "react";

//Styles
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  TextCheckBox,
} from "./styles";

const Checkbox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />

      <TextCheckBox checked={checked}>{text}</TextCheckBox>
    </CheckboxContainer>
  );
};
export default Checkbox;
