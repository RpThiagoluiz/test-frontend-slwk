import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto;

  grid-template-areas: "LS RS";
  grid-gap: 35px;

  justify-content: center;
  height: 100vh;
`;

//LEFT SIDE
export const LeftSide = styled.div`
  grid-area: LS;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Subtitle = styled.h4`
  color: #4272f5;
  margin: 15px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  border: 2px solid #4272f5;
  border-radius: 5px;

  padding: 2px;
  margin-bottom: 5px;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
export const TextArea = styled.textarea`
  resize: none;
  width: 100%;

  margin-top: 25px;

  border: 2px solid #4272f5;
  border-radius: 5px;
  min-height: 150px;

  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

//Right SIDE
export const RightSide = styled.div`
  grid-area: RS;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const OptionLine = styled.div`
  width: 100%;
  margin-top: -10px; //Just align in top, for hour.
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #4272f5;

  margin-right: 25px;

  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const InputCheckbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;

  :checked {
    opacity: 1;
  }
`;

export const Select = styled.select`
  margin-bottom: 25px;

  color: #4272f5;
  border: 2px solid #4272f5;
  border-radius: 5px;

  text-align: center;
  padding: 5px;

  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const TagsLine = styled.div`
  > span {
    padding: 7px;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

//FinishButton ->
export const Button = styled.button`
  width: 100px;
  height: 50px;
`;
