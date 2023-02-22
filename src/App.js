import MusicPlayer from './Pages/MusicPlayer/MusicPlayer'
import {Routes , Route } from 'react-router-dom'
import Search from './Pages/Search.js/Search'

const App = () => {

  return(
    <div>
      <Routes>
        <Route path='/' element={<MusicPlayer />}   />
        <Route path='/search' element={<Search />}   />
      </Routes>
    </div>
  )
}

export default App