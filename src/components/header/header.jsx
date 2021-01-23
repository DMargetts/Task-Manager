import React from "react";
import Button from "../button/Button";
import headerStyle from "./headerStyle.module.css";

const header = ({ toggleForm, formOpen }) => {
  return (
    <div className={headerStyle.header}>
      <h1>Task Manager</h1>
      <Button event={toggleForm} formOpen={formOpen}>
        {formOpen ? "Close" : "Add Task"}
      </Button>
    </div>
  );
};

export default header;
