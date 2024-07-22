import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ComponentLogin } from './components/ComponentLogin';
import { ComponentInicio } from './components/ComponentInicio';
import { ComponentProject } from './components/ComponentProject';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ComponentInicio />} />
        <Route path="/login" element={<ComponentLogin />} />
        <Route path="/proyecto" element={<ComponentProject />} />
      </Routes>
    </Router>
  );
}

export default App;
