import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route>
            {/* // http://localhost:3000 */}
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            {/* // http://localhost:3000/employees */}
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            {/* // http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent />}></Route>

            {/* // http://localhost:3000/add-employee/1 */}
            <Route
              path="/edit-employee/:id"
              element={<EmployeeComponent />}
            ></Route>
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
