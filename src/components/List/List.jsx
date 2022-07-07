import { useState } from "react";
import { nanoid } from "nanoid";
import { Input } from "../Input/Input";
import { ListWrapper, TasksList, FunctionalWrapper } from "./List.style";
import { Task } from "../Task/Task";
import dayjs from "dayjs";
import { PropTypes } from "prop-types";

export const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const localizedFormat = require("dayjs/plugin/localizedFormat");
    dayjs.extend(localizedFormat);
    const time = dayjs().format("LTS");
    const id = nanoid();
    const NewTask = { id, text, time };
    setTasks((prev) => [...prev, NewTask]);
  };

  const deleteTodo = (id) => {
    const newArray = tasks.filter((item) => item.id !== id);
    setTasks(newArray);
  };

  return (
    <ListWrapper>
      <FunctionalWrapper>
        <Input addTodo={addTodo} />
      </FunctionalWrapper>
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} deleteTodo={deleteTodo} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};

List.propTypes = {
  deleteTodo: PropTypes.func,
  sortByName: PropTypes.func,
  sortByTime: PropTypes.func,
};
