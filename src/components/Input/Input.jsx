import { useState } from "react";
import { StyledButton, StyledInput, InputWrapper } from "./Input.style";
import { PropTypes } from "prop-types";

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue();
    }
  };

  const tooHandleSubmit = () => {
    if (value && value.trim()) {
      addTodo(value.trim());
      setValue();
    }
  };

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <StyledButton onClick={tooHandleSubmit}>Add</StyledButton>
    </InputWrapper>
  );
};

Input.propTypes = {
  addTodo: PropTypes.func,
};
