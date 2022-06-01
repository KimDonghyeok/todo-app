import React from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import PropTypes from "prop-types";

export default function TodoInput(props) {
  const { input, handleInput, handleKeyPressed, handleClickPlus } = props;

  return (
    <TextInput
      type="text"
      placeholder="What's your to-do things?"
      value={input}
      onChange={(event) => {
        handleInput(event.target.value);
      }}
      onKeyDown={(event) => {
        handleKeyPressed(event);
      }}
      rightSection={
        <ActionIcon
          onClick={(event) => {
            handleClickPlus(event);
          }}
        >
          <Plus />
        </ActionIcon>
      }
      radius="md"
      size="lg"
      pb="md"
      styles={{
        input: {
          fontFamily: "Noto Sans KR",
          fontWeight: 700,
          color: "#4d4d4d",
          paddingLeft: "45px",
          "&:focus": {
            border: "1px solid #CED4DA",
          },
          "&::placeholder": {
            fontStyle: "italic",
            color: "#e6e6e6",
          },
        },
      }}
    />
  );
}

TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyPressed: PropTypes.func.isRequired,
  handleClickPlus: PropTypes.func.isRequired,
};
