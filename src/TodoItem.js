import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Text,
  CSSObject,
  ActionIcon,
  Paper,
  Group,
  createStyles,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { X } from "tabler-icons-react";

const useStyles = createStyles(() => ({
  default: {
    opacity: 0,
    transform: "translateY(-100%)",
    transition: "all 0.2s linear",
  },
  slide: {
    opacity: 1,
    transform: "translateY(0%)",
    transition: "all 0.2s linear",
  },
}));

const checkboxStyles = (): CSSObject => {
  return {
    flex: 5,
  };
};

const textStyles = (isDone): CSSObject => {
  return {
    fontFamily: "Noto Sans KR",
    fontSize: 18,
    fontWeight: 700,
    textDecoration: isDone ? "line-through" : "",
    color: isDone ? "lightgrey" : "#4d4d4d",
    flex: 90,
  };
};

const deleteButtonStyles = (hovered): CSSObject => {
  return {
    flex: 5,
    visibility: hovered ? "visible" : "hidden",
  };
};

export default function TodoItem(props) {
  const { id, isDone, text, handleCheckBox, handleDelete } = props;
  const { hovered, ref } = useHover();
  const { classes } = useStyles();
  const [itemClass, setItemClass] = useState(classes.default);

  useEffect(() => {
    setItemClass(classes.slide);
  }, [classes.slide]);

  const handleClickDelete = (event) => {
    setItemClass(classes.default);
    setTimeout(() => {
      handleDelete(event, id);
    }, 200);
  };

  return (
    <Paper shadow="xs" radius="lg" ref={ref} className={itemClass}>
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
          sx={checkboxStyles}
        />
        <Text sx={textStyles(isDone)}>{text}</Text>
        <ActionIcon
          onClick={(event) => handleClickDelete(event)}
          sx={deleteButtonStyles(hovered)}
          radius="xl"
        >
          <X color="lightgrey" strokeWidth={3} />
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
