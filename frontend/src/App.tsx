import ProjectList from './components/ProjectList'
import Layout from './Layout'
import Landing from './components/Landing'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/projects' element={<ProjectList/>}/>
      </Routes>
    </Layout>
  )
}

export default App
