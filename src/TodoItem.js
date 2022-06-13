import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Text,
  CSSObject,
  ActionIcon,
  Paper,
  Group,
  keyframes,
  createStyles,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { X } from "tabler-icons-react";

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-100%)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(-100%)",
  },
});

const useStyles = createStyles(() => ({
  default: {
    opacity: 0,
    transform: "translateY(-100%)",
  },
  show: {
    animation: `${slideIn} .2s ease-in`,
  },
  remove: {
    animation: `${slideOut} .2s ease-out`,
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
    setItemClass(classes.show);
  }, [classes.show]);

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
          onClick={(event) => {
            setItemClass(classes.remove);
            setTimeout(() => {
              handleDelete(event, id);
            }, 200);
          }}
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
