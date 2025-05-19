import { RouterProvider } from 'react-router-dom'
import './App.css'
import { myRouter } from './Router'
import { initialUser, UserContext, UserReducer } from './commponent/UserReducer'
import { useReducer } from 'react'
import UserAccses from './commponent/UserAccses'

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialUser);

  return (
    <>
      <UserContext value={[state, dispatch]}>
      <RouterProvider router={myRouter} />
        <UserAccses/>
      </UserContext>
    </>
  )
}

export default App
