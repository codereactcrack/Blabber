import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Auth/Login/LoginPage'
import RegisterPage from './components/Auth/Register/RegisterPage'
import ChatRoom from './components/Chat/ChatRoom';
import Terms from './pages/Terms'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element ={<LoginPage />} />
        <Route path='/sign-up' element ={<RegisterPage />} />
        <Route path='/chat-room' element ={<ChatRoom />} />
        <Route path='/terms' element ={<Terms/>} />
        <Route path='/privacy' element ={<Terms/>} />
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
