import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Auth/Login/LoginPage'
import RegisterPage from './components/Auth/Register/RegisterPage'
import Terms from './pages/Terms'
import MainScreen from './components/MainScreen/MainScreen';
import ChannelTemplate from './components/Channels/ChannelTemplate';
import ChatTemplate from './components/Chats/ChatTemplate';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
import Message from './components/Chats/message/Message';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element ={<LoginPage />} />
        <Route path='/sign-up' element ={<RegisterPage />} />
        <Route path='/app' element ={<ProtectedRoute element={<MainScreen />} /> }> 
            <Route index element={<Profile />} />
            <Route path='chat' element={<ChatTemplate />} >
              <Route path='dm/:friendId' element ={<Message />} />
            </Route>
            <Route path='channels' element={<ChannelTemplate />} />
            <Route path='profile' element={<Profile />} />
        </Route>
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
