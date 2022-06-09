import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Text,
  CSSObject,
  ActionIcon,
  Paper,
  Group,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { X } from "tabler-icons-react";

export default function TodoItem(props) {
  const { id, isDone, text, handleCheckBox, handleDelete } = props;
  const { hovered, ref } = useHover();

  const textStyles: CSSObject = {
    fontFamily: "Noto Sans KR",
    fontSize: 18,
    fontWeight: 700,
    textDecoration: isDone ? "line-through" : "",
    color: isDone ? "lightgrey" : "#4d4d4d",
    flex: 90,
  };

  return (
    <Paper shadow="xs" radius="lg" ref={ref}>
      <Group p="lg">
        <Checkbox
          id={id}
          checked={isDone}
          onChange={(event) => {
            handleCheckBox(event, id);
          }}
          color="teal"
          size="md"
          radius="xl"
          style={{
            flex: 5,
          }}
        />
        <Text sx={textStyles}>{text}</Text>
        <ActionIcon
          onClick={(event) => {
            handleDelete(event, id);
          }}
          style={{
            flex: 5,
            visibility: hovered ? "visible" : "hidden",
          }}
          radius="xl"
        >
          <X color="lightgrey" strokeWidth={3} size="lg" />
        </ActionIcon>
      </Group>
    </Paper>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
