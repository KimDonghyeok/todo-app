import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Text, Group, CSSObject } from "@mantine/core";

export default function TodoItem(props) {
  const { id, isDone, text, handleCheckBox } = props;

  const textStyles: CSSObject = {
    fontFamily: "Noto Sans KR",
    fontWeight: 700,
    textDecoration: isDone ? "line-through" : "",
    color: isDone ? "lightgrey" : "",
  };

  return (
    <Group pt="lg">
      <Checkbox
        id={id}
        checked={isDone}
        onChange={(event) => {
          handleCheckBox(event, id);
        }}
        color="cyan"
        size="lg"
      />
      <Text sx={textStyles} size="lg">
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
