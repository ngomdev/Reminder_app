import React from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "../src/services/reminder";
import { useState, useEffect } from "react";
import NewReminder from "./components/NewReminder";

function App() {
  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminder();
  }, []);

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };
  const loadReminder = async () => {
    const reminders = await ReminderService.getReminders();

    setReminders(reminders);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} oneRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
