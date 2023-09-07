import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../button/button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slice/todoSlice";

export const AddForm = () => {
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    label !== "" && dispatch(addTodo(label));
    setLabel("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="h-full mr-2 p-2"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
      ></input>
      <Button label="Add element" />
    </form>
  );
};
