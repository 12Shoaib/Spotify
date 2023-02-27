import homeposter from './homeposter.module.css';
import { useState , useEffect } from 'react';

const data = [1,2,3,4,5,6]
const HomePoster = () => {
    const [loader , setLoader] = useState(false)
    const [topAlbums , setTopAlbums] = useState([])
    const [forYou , setForYou] = useState([])
    
    useEffect(() => {
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
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
      fetchingTopAlbums()
    },[])
     useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
      const fetchingForYou = async () => {
        setLoader(true)
        const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=30&startFrom=70', options)
        const data = await response.json()
        setForYou(data.tracks)
        setLoader(false)
      }  
      fetchingForYou()
    },[])
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
          {topAlbums.map(element => <div className={homeposter.card__Content__Xl}>
            <img  src={element?.share?.image|| "https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560"}  className={homeposter.content__Img} />
            <p className={homeposter.content__Subheading}>{element?.title || 'HELLOW WORLD'}</p>
            </div>)}
            </div>
            </div>
            <div className={homeposter.bottom__Section}>
            <h1 className={homeposter.heading}>Made for you</h1>
            <div className={homeposter.home__Content1}>
           {forYou.map(element =>  <div className={homeposter.card__Content__Xxl}>
            <img src={element?.share?.image|| "https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560"}  className={homeposter.content__Img1}/>
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