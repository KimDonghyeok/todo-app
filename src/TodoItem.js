import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Text, Grid, CSSObject, ActionIcon } from "@mantine/core";
import { X } from "tabler-icons-react";

export default function TodoItem(props) {
  const { id, isDone, text, handleCheckBox, handleDelete } = props;

  const textStyles: CSSObject = {
    fontFamily: "Noto Sans KR",
    fontSize: 18,
    fontWeight: 700,
    textDecoration: isDone ? "line-through" : "",
    color: isDone ? "lightgrey" : "",
  };

  return (
    <Grid pt="lg">
      <Grid.Col span={1} pl="md">
        <Checkbox
          id={id}
          checked={isDone}
          onChange={(event) => {
            handleCheckBox(event, id);
          }}
          color="cyan"
          size="lg"
        />
      </Grid.Col>
      <Grid.Col span={10}>
        <Text sx={textStyles}>{text}</Text>
      </Grid.Col>
      <Grid.Col span={1}>
        <ActionIcon
          onClick={(event) => {
            handleDelete(event, id);
          }}
          style={{
            visibility: isDone ? "visible" : "hidden",
          }}
        >
          <X color="lightgrey" strokeWidth={3} />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
