import { useState } from "react";
import { nanoid } from "nanoid";
import { Input } from "../Input/Input";
import { ListWrapper, TasksList } from "./List.style";
import { Task } from "../Task/Task";

export const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
    const NewTask = { id, text };
    setTasks((prev) => [...prev, NewTask]);
  };

  return (
    <ListWrapper>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};
