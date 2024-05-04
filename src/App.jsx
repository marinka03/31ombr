import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
