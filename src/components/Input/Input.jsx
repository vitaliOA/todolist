import { useState } from "react";
import { StyledInput } from "./Input.style";
import { PropTypes } from "prop-types";

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue();
    }
  };

  return (
    <StyledInput
      type="text"
      value={value || ""}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
};

Input.propTypes = {
  addTodo: PropTypes.func,
};
