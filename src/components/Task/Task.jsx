import {
  AddictWrapper,
  StyledTask,
  TaskCheckbox,
  TaskDelete,
  TaskText,
  TaskTime,
} from "./Task.style";
import { objectOf, string, PropTypes } from "prop-types";
import { useState } from "react";

export const Task = ({ task, deleteTodo }) => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <StyledTask className={check ? "done" : ""}>
      <TaskText className={check ? "done" : ""}>{task.text}</TaskText>
      <AddictWrapper>
        <TaskTime>{task.time}</TaskTime>
        <TaskCheckbox type="checkbox" onChange={handleCheck}></TaskCheckbox>
        <TaskDelete onClick={() => deleteTodo(task.id)}>Delete</TaskDelete>
      </AddictWrapper>
    </StyledTask>
  );
};

Task.propTypes = {
  task: objectOf(string),
  TaskDelete: PropTypes.func,
  deleteTodo: PropTypes.func,
  handleCheck: PropTypes.func,
};
