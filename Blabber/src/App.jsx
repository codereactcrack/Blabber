import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Auth/Login/LoginPage'
import RegisterPage from './components/Auth/Register/RegisterPage'
import ChatRoom from './components/Chat/ChatRoom';
import Terms from './pages/Terms'
import { useContext } from 'react';
import UserContext from './context/AuthContext/UserContext';

function App() {

  const {currentUser} = useContext(UserContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element ={<LoginPage />} />
        <Route path='/sign-up' element ={<RegisterPage />} />
        {currentUser && <Route path='/chat-room' element ={<ChatRoom />} />}
        <Route path='/terms' element ={<Terms/>} />
        <Route path='/privacy' element ={<Terms/>} />
        <Route path='*' element={<div>404! BAD GATEWAY</div>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
