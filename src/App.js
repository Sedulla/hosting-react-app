import { Route, Routes } from 'react-router-dom';
import './App.scss';

import { Header } from './app/components/Header';
import { Homepage } from './app/views/home/Homepage';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hosting" />
          <Route path="/domain" />
          <Route path="/email" />
          <Route path="/website-builder" />
          <Route path="/pricing" />
          <Route path="*" />
        </Routes>
      </div>
    </>
  );
}

export default App;
