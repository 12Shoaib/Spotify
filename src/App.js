import MusicPlayer from './Pages/MusicPlayer/MusicPlayer'
import {Routes , Route } from 'react-router-dom'
import Search from './Pages/Search.js/Search'
import Library from './Pages/Library/Library'
import Playlist from './Pages/Playlist/Playlist'
import Podcast from './Pages/Podcast/Podcast'
import Artist from './Pages/Artist/Artist'
import Album from './Pages/Albums/Albums'
import Download from './Pages/Download/Download'
import Likes from './Pages/Likes/Likes'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

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
        <Route path='/download' element={<Download />}   />
        <Route path='/likes' element={<Likes />}   />
        <Route path='/signin' element={<Login />}   />
        <Route path='/signup' element={<Signup />}   />
      </Routes>
    </div>
  )
}

export default App