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
        className="checked:bg-lime-300 peer relative appearance-none shrink-0 w-4 h-4 border-2 border-lime-400 rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-lime-100
         checked:border-0
        disabled:border-stone-100 disabled:bg-stone-100"
        onChange={handleChange}
        checked={done}
        name={label}
      />
      <svg
        className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={String(id)} className={labelclassname}>
        {label}
      </label>
    </div>
  );
};
