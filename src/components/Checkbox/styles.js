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

  //style for Checked -> hidden check
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const StyledCheckbox = styled.label`
  width: 30px;
  height: 30px;
  margin-right: 6px;
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 15px;
    display: ${(props) => (props.checked ? "flex" : "none")};
  }
`;

export const TextCheckBox = styled.label`
  color: #4272f5;

  opacity: ${(props) => (props.checked ? "1" : "0.7")};
`;
