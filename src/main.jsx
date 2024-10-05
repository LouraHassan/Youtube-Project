import { createRoot } from 'react-dom/client'
import Router from './routers/Routers'
import {
  RouterProvider,
} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}></RouterProvider>

)
