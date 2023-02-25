import MusicPlayer from './Pages/MusicPlayer/MusicPlayer'
import {Routes , Route } from 'react-router-dom'
import Search from './Pages/Search.js/Search'
import Library from './Pages/Library/Library'
import Playlist from './Pages/Playlist/Playlist'
import Podcast from './Pages/Podcast/Podcast'
import Artist from './Pages/Artist/Artist'
import Album from './Pages/Albums/Albums'

const App = () => {

  return(
    <div>
      <Routes>
        <Route path='/' element={<MusicPlayer />}   />
        <Route path='/search' element={<Search />}   />
        <Route path='/library' element={<Library />}   />
        <Route path='/playlist' element={<Playlist />}   />
        <Route path='/podcast' element={<Podcast />}   />
        <Route path='/artist' element={<Artist />}   />
        <Route path='/album' element={<Album />}   />
      </Routes>
    </div>
  )
}

export default App