import { useState, useEffect } from "react";
//Promise Http
import axios from "axios";
//Components
import Checkbox from "../../components/Checkbox";

//Styles
import {
  Form,
  LeftSide,
  RightSide,
  Subtitle,
  Input,
  InputCheckbox,
  TextArea,
  OptionLine,
  Label,
  Select,
  TagsLine,
  Button,
} from "./styles";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitForm = async (e) => {
    e.prevendDefault();
    await axios; //enviar os dados para a api do trello
  };

  return (
    <Form>
      <LeftSide>
        <Subtitle>Name</Subtitle>
        <Input required type="text" placeholder="Ze Fulano" />
        <Subtitle>Email</Subtitle>
        <Input required type="email" placeholder="ex@exmail.com" />

        <TextArea
          required
          type="text"
          placeholder="Your mensage here!"
          rows={10}
        />
      </LeftSide>
      <RightSide>
        <OptionLine>
          <Checkbox text="Option 1" />
          <Checkbox text="Option 2" />
          <Checkbox text="Option 3" />
        </OptionLine>
        <Subtitle>DropDown</Subtitle>
        <Select>
          <option value="0">Test 0</option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
          <option value="4">Test 4</option>
        </Select>
        <Subtitle>Tags</Subtitle>
        <TagsLine>
          <span>Web</span>
          <span>Ilustrator</span>
          <span>Graphics</span>
          <span>Ui</span>
          <span>Design</span>
          <span>App</span>
          <span>Iphone</span>
          <span>Interface</span>
          <span>Icon</span>
          <span>Web design</span>
          <span>ReactJS</span>
        </TagsLine>
        <Button type="submit">Send</Button>
      </RightSide>
    </Form>
  );
};

export default FormPage;
