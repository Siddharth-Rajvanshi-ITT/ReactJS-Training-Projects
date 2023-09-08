import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Pages/Dashboard";
import Attandance from "./Components/Pages/Attendance";
import Classes from "./Components/Pages/Classes";
import PostAssignment from "./Components/Pages/PostAssignment";
import StudentAssignment from "./Components/Pages/StudentAssignment";
import PageNotFound from "./Components/Pages/PageNotFound";
import Student from "./Components/Pages/Student";

function App() {
  return (
    <div className="App container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/attendance" element={<Attandance />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/post-assignment" element={<PostAssignment />} />
          <Route path="/student-assignment" element={<StudentAssignment />} />
          <Route path=":studentName" element={<Student />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
