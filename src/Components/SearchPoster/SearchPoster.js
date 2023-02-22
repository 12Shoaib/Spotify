import searchposter from './searchposter.module.css'
import {FiSearch} from 'react-icons/fi'
import { useEffect , useState } from 'react'

const data = [1,1,2,1,1,1,1,,11,1]
const SearchPoster = () => {
    const [albums , setAlbums] = useState([])
    const [loader , setLoader] = useState(false)

    // useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        const fetchAlbums = async() => {
            setLoader(true)
            const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
            const data  = await response.json()
            setAlbums(data.tracks)
            setLoader(false)
        }
    // },[])

    return (
        <div className={searchposter.main__component}>
            <div className={searchposter.searchposter__searchWrapper}>
             <FiSearch className={searchposter.search__Icon} />
              <input placeholder='What do you want to listen to?' className={searchposter.search__Bar}  />
              <p onClick={fetchAlbums}>Click HERE TO FETCH</p>
            </div>
            
           {loader && <div className={searchposter.loader__card__Container}>

            {data?.map((element) =><div className={searchposter.loader__card__Wrapper}>
               
               <p className={searchposter.loader__searchposter__Img} ></p>
               {/* <h6>{element.share.subject}</h6> */}
               <p className={searchposter.sub__Heading}></p>
               <p className={searchposter.sub__Heading}></p>
            </div>)}

            </div>}

                <div className={searchposter.card__Container}>

                    { albums?.map((element) =><div className={searchposter.card__Wrapper}>

                    {/* <img className={searchposter.searchposter__Img} src='https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62' /> */}
                    <img className={searchposter.searchposter__Img} src={element.share.image} />
                    <h6>{element.share.subject}</h6>
                    {/* <h2>Heloo EveryOne..!!</h2> */}
                    </div>)}

                </div>


        </div>
    )
}

export default SearchPoster