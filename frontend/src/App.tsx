import ProjectList from './components/ProjectList'
import Layout from './Layout'
import Landing from './components/Landing'
import Contact from './components/Contact'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/projects' element={<ProjectList/>}/>
        <Route path='/about' />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Layout>
  )
}

export default App
