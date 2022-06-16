import React from "react";
import { TextInput, ActionIcon, createStyles } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import PropTypes from "prop-types";

const useStyles = createStyles(() => ({
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
}));

export default function TodoInput(props) {
  const { input, handleInput, handleKeyPressed, handleClickPlus } = props;
  const { classes } = useStyles();
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
          radius="xl"
        >
          <Plus color="grey" strokeWidth={2} />
        </ActionIcon>
      }
      styles={{ input: classes.input }}
      radius="md"
      size="lg"
      pb="md"
    />
  );
}

TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyPressed: PropTypes.func.isRequired,
  handleClickPlus: PropTypes.func.isRequired,
};
