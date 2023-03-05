import homeposter from './homeposter.module.css';
import { useState , useEffect } from 'react';
import {isMusic , currentSong , topAlbumsAtom} from '../../Recoil/Recoil'
import {  useRecoilState, useSetRecoilState } from 'recoil'



const data = [1,2,3,4,5,6]
const HomePoster = () => {
    const [loader , setLoader] = useState(false)
    const [topAlbums , setTopAlbums] = useRecoilState(topAlbumsAtom)
    const [forYou , setForYou] = useState([])
    const setMusic = useSetRecoilState(isMusic)
    const setSelectedSong = useSetRecoilState(currentSong)

    useEffect(() => {

      fetchingTopAlbums()
      fetchingForYou()

    }, [])git 
    
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3c726cd1acmshcad790de7101870p1ec711jsn1dd6f776dc20',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
      const fetchingTopAlbums = async () => {
        setLoader(true)
        const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=6&startFrom=56', options)
        const data = await response.json()
        setTopAlbums(data.tracks)
        setLoader(false)
      }  
  
      const fetchingForYou = async () => {
        setLoader(true)
        const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=30&startFrom=70', options)
        const data = await response.json()
        setForYou(data.tracks)
        setLoader(false)
      }  
     
    function topAlbumClickedValue (index) {
      setMusic(topAlbums[index].hub.actions[1].uri)
      setSelectedSong(topAlbums[index])
  }
    function forYouAlbumClicked (index) {
      console.log(forYou[index] , 'shoaib')
      setMusic(forYou[index].hub.actions[1].uri)
      setSelectedSong(forYou[index])
    }
    return(
        <div className={homeposter.main__Component}>
            <div className={homeposter.top__Section}>
           <h1 className={homeposter.heading}> Good evening</h1>
           {loader && <div className={homeposter.home__Skeleton}>
          {data.map(element => <div className={homeposter.card__Xl}>
            <p className={homeposter.home__Img} ></p>
            <p className={homeposter.home_Subheading}></p>
            </div>)}
            <div className={homeposter.home__Skeleton1}>
           {data.map(element =>  <div className={homeposter.card__Xxl}>
            <p  className={homeposter.home__Img1}></p>
            <p  className={homeposter.home_Subheading1}></p>
            <p  className={homeposter.home_Subheading2}></p>
            </div>)}
            </div>
            </div>  }

           <div className={homeposter.home__Content}>
          {topAlbums.map((element , index) => <div onClick={() => topAlbumClickedValue(index)}  className={homeposter.card__Content__Xl}>
            <img alt='img' src={element?.share?.image|| "https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560"}  className={homeposter.content__Img} />
            <p className={homeposter.content__Subheading}>{element?.title || 'noTittle'}</p>
            </div>)}
            </div>
            </div>
            <div className={homeposter.bottom__Section}>
            <h1 className={homeposter.heading}>Made for you</h1>
            <div className={homeposter.home__Content1}>
           {forYou.map((element , index) =>  <div className={homeposter.card__Content__Xxl}>
            <img onClick={() => forYouAlbumClicked(index)} alt='img' src={element?.share?.image|| "https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560"}  className={homeposter.content__Img1}/>
            <div className={homeposter.subHeading__Wrapper}>
            <p  className={homeposter.content__Subheading1}> {element?.title}</p>
            <p  className={homeposter.content__Subheading2}>{element?.subtitle}</p>
            </div>
            </div>)}
            </div>  
            </div>
      
        </div>
    )
}

export default HomePoster