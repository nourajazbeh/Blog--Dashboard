import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<BlogForm posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<BlogForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;














//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
       // </a>
      //</header>
    //</div>
 //);
//}

//export default App;
