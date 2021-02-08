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
  TextArea,
  OptionLine,
  Select,
  TagsLine,
  Button,
} from "./styles";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState("");
  const [tags, setTags] = useState();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(name, email, description, selected);

    alert("Formulario enviado!");
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <LeftSide>
        <Subtitle>Name</Subtitle>
        <Input
          required
          type="text"
          placeholder="Ze Fulano"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Subtitle>Email</Subtitle>
        <Input
          required
          type="email"
          placeholder="ex@exmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          required
          type="text"
          placeholder="Your mensage here!"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </LeftSide>
      <RightSide>
        <OptionLine>
          <Checkbox text="Option 1" />
          <Checkbox text="Option 2" />
          <Checkbox text="Option 3" />
        </OptionLine>
        <Subtitle>DropDown</Subtitle>
        <Select onChange={(e) => setSelected(e.target.value)}>
          <option value="Test 0">Test 0</option>
          <option value="Test 1">Test 1</option>
          <option value="Test 22">Test 2</option>
          <option value="Test 33">Test 3</option>
          <option value="Test 4">Test 4</option>
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
