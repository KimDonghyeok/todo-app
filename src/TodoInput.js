import React from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import PropTypes from "prop-types";

export default function TodoInput(props) {
  const { input, handleInput, handleKeyPressed, handleClickPlus } = props;

  return (
    <TextInput
      type="text"
      placeholder="What's your To-Do things?"
      radius="md"
      size="lg"
      value={input}
      onChange={(event) => {
        handleInput(event.target.value);
      }}
      onKeyDown={(event) => {
        handleKeyPressed(event);
      }}
      rightSection={
        <ActionIcon
          size="md"
          onClick={(event) => {
            handleClickPlus(event);
          }}
        >
          <Plus />
        </ActionIcon>
      }
      pb="md"
      px="md"
    />
  );
}

TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyPressed: PropTypes.func.isRequired,
  handleClickPlus: PropTypes.func.isRequired,
};
