import { StyledTask, TaskText } from "./Task.style";
import { objectOf, string } from "prop-types";

export const Task = ({ task }) => {
  return (
    <StyledTask>
      <TaskText>{task.text}</TaskText>
    </StyledTask>
  );
};

Task.propTypes = {
  task: objectOf(string),
};
