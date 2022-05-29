import React from "react";
import { TextInput, ActionIcon, Paper } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import PropTypes from "prop-types";

export default function TodoInput(props) {
  const { input, handleInput, handleKeyPressed, handleClickPlus } = props;

  return (
    <Paper>
      <TextInput
        type="text"
        placeholder="What's your To-Do things?"
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
        radius="md"
        size="lg"
        pb="md"
        px="md"
        styles={{
          input: {
            fontFamily: "Noto Sans KR",
            fontWeight: 700,
            fontStyle: "italic",
            "&:focus": {
              border: "1px solid #CED4DA",
            },
            "&::placeholder": {
              color: "#e6e6e6",
            },
          },
        }}
      />
    </Paper>
  );
}

TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyPressed: PropTypes.func.isRequired,
  handleClickPlus: PropTypes.func.isRequired,
};
