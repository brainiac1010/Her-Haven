import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import 'remixicon/fonts/remixicon.css'
import { store } from '../src/redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
