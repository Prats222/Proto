import {Routes,Route} from 'react-router-dom'
import StudentLogin from './Auth/studentLogin.js';
import FacultyLogin from './Auth/facultyLogin.js';

function App() {
  return (
   <Routes>
   <Route path="/student/studentLogin" element={<StudentLogin/>}   />
   <Route path="/faculty/facultyLogin" element={<FacultyLogin />} />
   </Routes>
  );
}

export default App;
