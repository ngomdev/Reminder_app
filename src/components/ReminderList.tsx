import React from "react";
import Reminder from "../models/reminder";
import { useState } from "react";

interface ReminderListProps {
  items: Reminder[];
  oneRemoveReminder: (id: number) => void;
}
function ReminderList({ items, oneRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => oneRemoveReminder(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
