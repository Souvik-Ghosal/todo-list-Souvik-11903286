import React from 'react';
import Footer from './includes/footer';
import ConnectedTasks from './tasks/tasks';
import './../styles/App.css';

const App = () => (
  <div className="main-container">
    <ConnectedTasks />
    <Footer />
  </div>
);

export default App;
