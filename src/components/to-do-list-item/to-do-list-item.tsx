import React, { ChangeEvent } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { toggleDone } from "../../slice/todoSlice";
import { Todo } from "../to-do-list/to-do-list";

type ToDoListItemProps = {
  todo: Todo;
};

export const ToDoListItem = (props: ToDoListItemProps) => {
  const { todo } = props;
  const { label, done, id } = todo;
  const dispatch = useDispatch();
  const labelclassname = classNames(done ? "pl-2 line-through" : "pl-2");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleDone(e.target.name));
  };
  return (
    <div className="py-2 px-4 w-full text-start flex">
      <input
        id={String(id)}
        type="checkbox"
        className="checked:bg-lime-300"
        onChange={handleChange}
        checked={done}
        name={label}
      />
      <label htmlFor={String(id)} className={labelclassname}>
        {label}
      </label>
    </div>
  );
};
