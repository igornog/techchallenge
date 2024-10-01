import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminConsole } from './pages/AdminConsole';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/admin-console' element={<AdminConsole />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/create-post' element={<CreatePost />} />
    </Routes>
  );
}

export default App;
