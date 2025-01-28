import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/*  ------- PAGES ------  */
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import Prospects from './Pages/Prospects/Prospects';
import Schedule from './Pages/Schedule/Schedule';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Projects from './Pages/Projects/Projects';
import ForgotPassword from './Pages/Forgotpassword/ForgotPassword';

/*  ------- LAYOUTS ------  */
import RootLayout from './Layouts/RootLayout';
import DashoardLayout from './Layouts/DashoardLayout';
import './App.css'

function App() {
  // const routes = createRoutesFromElements(
  //   <Route path='/' element={<RootLayout/>}>
  //     <Route index element={<Login/>}/>
  //     <Route path='signup' element={<Signup/>}/>
  //     <Route path='forgot' element={<ForgotPassword/>}/>
  //     <Route path='dashboard' element={<DashoardLayout/>}>
  //       <Route index element={<Dashboard/>}/>
  //       <Route path='project' element={<Projects/>}/>
  //       <Route path='schedule' element={<Schedule/>}/>
  //       <Route path='prospects' element={<Prospects/>}/>
  //     </Route>
  //   </Route>
  // )
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgot", element: <ForgotPassword /> },
        {
          path: "dashboard", 
          element: <DashoardLayout />,
          children: [
            {index: true, element: <Dashboard />},
            {path: 'project', element: <Projects />},
            {path: 'schedule', element: <Schedule />},
            {path: 'prospects', element: <Prospects />}
          ] 
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
