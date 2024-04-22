import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserPage from "./pages/UserPage";
import ActiveTodos from "./pages/ActiveTodos";
import CompletedTodos from "./pages/CompletedTodos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/active" element={<ActiveTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />

          <Route path="/users" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
