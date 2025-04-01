import { BrowserRouter,Route,Routes} from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./views/home";
import Add from "./views/add";
import Edit from "./views/edit";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:userId" element={<Edit />} />
    </Routes>
  </BrowserRouter>,
)
