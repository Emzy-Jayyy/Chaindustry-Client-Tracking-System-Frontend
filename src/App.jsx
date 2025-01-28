import { useState } from 'react'
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
 } from 'react-router-dom'

 /*------------PAGES--------- */
 import Dashboard from './Pages/Dashboard/Dashboard.jsx';
 import NotFound from './Pages/NotFound/NotFound.jsx';
 import Profile from './Pages/Profile/Profile.jsx';
 import Project from './Pages/Project/Project.jsx';
 import Prospect from './Pages/Prospect/Prospect.jsx';
 import Schedule from './Pages/Schedule/Schedule.jsx';
 import Login from './Pages/Login/Login.jsx';
 import Signup from './Pages/Signup/Signup.jsx';
 import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';

  /*------------LAYOUT--------- */
  import RootLayout from './Layouts/RootLayout.jsx';
  import DashboardLayout from './Layouts/DashboardLayout.jsx';
import './App.css'


function App() {
  const routes = createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='forgot' element={<ForgotPassword />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='project' element={<Project />} />
        <Route path='Schedule' element={<Schedule />} />
        <Route path='Prospects' element={<Prospect />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='NotFound' element={<NotFound />} />
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
