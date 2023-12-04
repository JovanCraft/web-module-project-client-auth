import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';

function App() {
  return (
    <div className="App">
      <header>
      <h2>Friends Database</h2>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='/friends'>Friends List</Link>
        <Link className='link' to='/friends/add'>Add Friends</Link>
        <Link className='link' to='/logout'>Logout</Link>
      </header>
      <Routes>
        <>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/friends' element={<FriendsList />} />
          <Route path='/friends/add' element={<AddFriends />} />
          {/* <Route path='/logout' element={<Logout />} /> */}
        </>
      </Routes>
    </div>
  );
}

export default App;
