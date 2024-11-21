import React from "react";
import "./AddForm.css";
export default function AddForm({ newTitle, setNewTitle, createTask, editId }) {
  return (
    <div>
      <>
        <h2>แอพบริหารจัดการงาน</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTask();
          }}
        >
          <div className="form-control">
            <input
              type="text"
              className="text-input"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            ></input>
            <button type="submit" className="submit-btn">
              {editId ? "อัพเดท" : "เพิ่ม"}
            </button>
          </div>
        </form>
      </>
    </div>
  );
}
