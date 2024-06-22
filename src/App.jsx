import { Outlet } from "react-router-dom";
import HeaderLayout from "./layout/HeaderLayout";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <HeaderLayout />
      <Outlet />
    </div>
  );
}

export default App;
