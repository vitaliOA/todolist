import styled from "styled-components";

export const StyledTask = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #d8eef1;
  &.done {
    background-color: #f1bfed;
  }
`;

export const TaskText = styled.div`
  &.done {
    text-decoration: line-through;
  }
`;

export const TaskTime = styled.div``;

export const TaskDelete = styled.button``;

export const TaskCheckbox = styled.input``;

export const AddictWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;
