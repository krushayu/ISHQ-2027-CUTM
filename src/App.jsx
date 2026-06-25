import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './mobile-responsive.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import ImpDates from './Pages/ImpDates/ImpDates';
import Contact from './Pages/Contact/Contact.jsx';
import Scope from './Pages/Scope/Scope';
import Committee from './Pages/Committee/Committee.jsx';
import Place from './Pages/Place/Place';
import Accommodation from './Pages/Accommodation/Accommodation.jsx';
import PaperSubmission from './Pages/PaperSubmission/PaperSubmission';
import Sponsors from './Pages/Sponsors/Sponsors';
import ProgramSchedule from './Pages/Program/ProgramSchedule';
// import CallForPapers from './Pages/CallForPapers';
// import Publication from './Pages/Publication';
import Registration from './Pages/Registration/Registraton';
import NotFound from './Pages/NoFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imp-dates" element={<ImpDates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/places" element={<Place />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/program-schedule" element={<ProgramSchedule />} />
          {/* <Route path="/call-for-papers" element={<CallForPapers />} /> */}
          {/* <Route path="/publication" element={<Publication />} /> */}
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;