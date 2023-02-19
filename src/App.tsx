import { Route,BrowserRouter,Routes } from 'react-router-dom';
import NominationForm from './Pages/NominationForm';
import ResultPage from './Pages/ResultPage';
import VotingPage from './Pages/VotingPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NominationForm/>}/>
        <Route path="/result" element={<ResultPage/>}/>
        <Route path="/voting" element={<VotingPage/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

