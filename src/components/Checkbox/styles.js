import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 25px;
  padding-left: 5px;

  border-radius: 5px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const TextCheckBox = styled.label`
  color: #4272f5;

  opacity: ${(props) => (props.checked ? "1" : "0.7")};
`;
