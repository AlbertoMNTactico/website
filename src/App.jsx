import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home></Home>}/>
          <Route path="/about" element={ <About></About>}/>
          <Route path="/contact" element={ <Contact></Contact>}/>
          <Route path="*" element={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
