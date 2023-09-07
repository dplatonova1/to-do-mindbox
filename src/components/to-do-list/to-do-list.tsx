import React from "react";
import { useSelector } from "react-redux";
import { ToDoListItem } from "../to-do-list-item/to-do-list-item";
import { StatusFilter } from "../status-filter/status-filter";
import { AddForm } from "../add-form/add-form";

export type Todo = {
  id: number;
  label: string;
  done: boolean;
};

type ToDoListProps = {
  items: Todo[];
};

export const ToDoList = (props: ToDoListProps) => {
  const { items } = props;
  const count = useSelector((state: any) => state.todo.count);

  return (
    <div className="bg-stone-100 w-2/3 p-3 rounded-lg border-solid border-2 border-stone-300 divide-y flex flex-col items-start justify-start">
      <AddForm />
      {items.length > 0 ? (
        items.map((el, index) => {
          return <ToDoListItem todo={el} key={index} />;
        })
      ) : (
        <div className="py-4 px-6 w-full flex justify-center">
          Time to add your to-dos!
        </div>
      )}
      <StatusFilter count={count} />
    </div>
  );
};
