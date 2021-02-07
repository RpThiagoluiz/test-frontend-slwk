import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 450px 450px;
  grid-template-rows: auto;

  grid-template-areas: "LS RS";
  grid-gap: 15px;

  justify-content: center;
  height: 100vh;
`;

export const LeftSide = styled.div`
  grid-area: LS;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.div`
  grid-area: RS;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.h3``;

export const Input = styled.input``;

export const TextArea = styled.textarea`
  resize: none;

  min-height: 150px;
`;

export const OptionLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label``;

export const Select = styled.select``;

export const TagsLine = styled.div``;

export const Button = styled.button``;
