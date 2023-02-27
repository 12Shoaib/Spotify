import homeposter from './homeposter.module.css';
import { useState , useEffect } from 'react';

const data = [1,2,3,4,5,6]
const HomePoster = () => {
    const [loader , setLoader] = useState(false)
    
    useEffect(() => {
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
      const fetchSongs = async () => {
        const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=50', options)
        const data = await response.json()

      }  
    },[])
    return(
        <div className={homeposter.main__Component}>
           <h1 className={homeposter.heading}> Good evening</h1>
           <div className={homeposter.home__Content}>
          {data.map(element => <div className={homeposter.card__Content__Xl}>
            <p className={homeposter.content__Img} ></p>
            <p className={homeposter.content__Subheading}></p>
            </div>)}
            <div className={homeposter.home__Content1}>
           {data.map(element =>  <div className={homeposter.card__Content__Xxl}>
            <p  className={homeposter.content__Img1}></p>
            <p  className={homeposter.content__Subheading1}></p>
            <p  className={homeposter.content__Subheading2}></p>
            </div>)}
            </div>
            </div>  
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
        </div>
    )
}

export default HomePoster