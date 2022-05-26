import React from "react";
import PropTypes from "prop-types";
import { Stack, Checkbox, Text, Group, CSSObject } from "@mantine/core";
import "./css/fonts.css";

const textStyles: CSSObject = {
  fontFamily: "Noto Sans KR",
};

export function TodoItem(props) {
  const { id, isDone, text } = props;

  return (
    <Stack justify="flex-start" spacing="xl">
      <Group px="xs" pt="xs">
        <Checkbox id={id} checked={isDone} color="cyan" size="md" />
        <Text sx={textStyles} size="lg" weight="500">
          {text}
        </Text>
      </Group>
    </Stack>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
};
