import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Text, Group, CSSObject } from "@mantine/core";
import "./css/fonts.css";

export default function TodoItem(props) {
  const { id, isDone, text, handleCheckBox } = props;

  const textStyles: CSSObject = {
    fontFamily: "Noto Sans KR",
    textDecoration: isDone ? "line-through" : "",
    color: isDone ? "lightgrey" : "",
  };

  return (
    <Group pt="sm">
      <Checkbox
        id={id}
        checked={isDone}
        onChange={(event) => {
          handleCheckBox(event, id);
        }}
        color="cyan"
        size="md"
      />
      <Text sx={textStyles} size="xl" weight="700">
        {text}
      </Text>
    </Group>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
};
