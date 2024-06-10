import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import Tarefa from './pages/tarefa/index'
//import Tarefa from './pages/tarefa/index'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound />},
  { path: '/sobre', element: <Sobre />},
  { path: '/tarefa', element: <Tarefa />}
])

export default router