import React from "react";
import "./Item.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export default function Item({ data, deleteTask, editTask }) {
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <MdDelete
          className="btn"
          onClick={() => deleteTask(data.id)}
        ></MdDelete>
        <FaEdit className="btn" onClick={() => editTask(data.id)}>
          <FaEdit />
        </FaEdit>
      </div>
    </div>
  );
}
