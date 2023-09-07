import React, { MouseEvent } from "react";
import classNames from "classnames";

type ButtonProps = {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { onClick, label, isActive } = props;
  const buttonclassname = classNames(
    isActive
      ? "px-3 py-2 rounded-lg border-solid border-2 border-stone-300 bg-lime-200"
      : "px-3 py-2 rounded-lg border-solid border-2 border-stone-300 hover:bg-lime-300"
  );
  return (
    <button onClick={onClick} className={buttonclassname}>
      {label}
    </button>
  );
};
