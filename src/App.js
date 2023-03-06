import { Route, Routes } from "react-router-dom"

//?components
import Header from "./components/Header";

//?pages
import Home from "./pages/Home";
import Form from "./pages/Form";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
