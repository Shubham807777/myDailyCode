import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Card from "./components/Card.jsx";
import { Todo_list } from "./components/Todo_list.jsx";
import { Increse_count } from "./components/Increse_count.jsx";
import { Input_form } from "./components/Input_form.jsx";
import { Map_Dynamically } from "./components/Map_Dynamically.jsx";
// import { Print_details } from "./components/Print_details.jsx";
import { User_data } from "./components/user_data.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Card />
    <Todo_list />
    <Increse_count />
    <Input_form />
    <Map_Dynamically />
    <User_data />
    {/* <Print_details /> */}
  </StrictMode>,
);
