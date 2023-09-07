import React, { MouseEvent, useState } from "react";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, clearComplete } from "../../slice/todoSlice";

type StatusFilterProps = {
  count: number;
};

export const StatusFilter = (props: StatusFilterProps) => {
  const { count } = props;
  const filter = useSelector((state: any) => state.todo.filter);
  const dispatch = useDispatch();
  const handleFilterChange = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(filterTodos(e.currentTarget.textContent));
  };
  const handleClearCompleted = () => {
    dispatch(clearComplete());
  };

  return (
    <div className="flex justify-between w-full pt-3">
      <div className="px-3 py-2">{count} items left</div>
      <Button
        label="All"
        onClick={handleFilterChange}
        isActive={filter === "All"}
      />
      <Button
        label="Active"
        onClick={handleFilterChange}
        isActive={filter === "Active"}
      />
      <Button
        label="Completed"
        onClick={handleFilterChange}
        isActive={filter === "Completed"}
      />
      <Button label="Clear completed" onClick={handleClearCompleted} />
    </div>
  );
};
