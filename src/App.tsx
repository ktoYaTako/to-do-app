import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";

import PrivateRoute from "./PrivateRoute";

function App() {
  return <TodoPage />;
}

export default App;
