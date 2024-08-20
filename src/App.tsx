import { Route, Routes } from 'react-router-dom'
import routes from '@/routes.tsx'

function App() {
  
  return (
    <Routes>
      {
        routes.map(route =>
          <Route
            path={route.route}
            key={route.route}
            element={route.component}
          />
        )
      }
    </Routes>
  )
}

export default App
