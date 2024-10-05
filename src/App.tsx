import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {SignUp, SignIn, Profile} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
