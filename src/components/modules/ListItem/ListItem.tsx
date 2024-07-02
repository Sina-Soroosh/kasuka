import React from "react";
import { FaCheckDouble } from "react-icons/fa";

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <>
      <li className="my-2">
        <FaCheckDouble className="text-primary w-4 inline-block" />
        <span className="text-base text-gray-800">{text}</span>
      </li>
    </>
  );
}

export default ListItem;
