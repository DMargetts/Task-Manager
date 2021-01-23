import React, { useState } from "react";
import Header from "./components/header/header";
import Form from "./components/form/Form";
import Task from "./components/task/Task";
import "./app.css";

const App = () => {
  const [form, setForm] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);
  const [task, setTask] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [data, setData] = useState([]);

  const getTask = (e) => {
    setTask(e.target.value);
  };

  const getDateAndTime = (e) => {
    setDateAndTime(e.target.value);
  };

  const toggleReminder = (e) => {
    setReminder(e);
  };

  const saveTask = () => {
    if (!task || !dateAndTime) {
      setEmptyValue(true);
    } else {
      const obj = {
        task: task,
        dateAndTime: dateAndTime,
        reminder: reminder,
      };
      setEmptyValue(false);
      setData([...data, obj]);
      setDateAndTime("");
      setTask("");
      setReminder(false);
    }
  };

  const deleteTask = (task) => {
    setData(data.filter((x) => x.task !== task));
  };
  return (
    <div>
      <Header toggleForm={() => setForm(!form)} formOpen={form}></Header>
      {form && (
        <Form
          emptyValue={emptyValue}
          taskValue={task}
          dateValue={dateAndTime}
          task={getTask}
          dateAndTime={getDateAndTime}
          save={saveTask}
          reminder={toggleReminder}
          bool={reminder}
          display={form}
        ></Form>
      )}
      {data.map((x) => {
        return (
          <Task
            task={x.task}
            dateAndTime={x.dateAndTime}
            reminder={x.reminder}
            key={x.task}
            deleteTask={deleteTask}
          ></Task>
        );
      })}
    </div>
  );
};

export default App;
