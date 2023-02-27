import homeposter from './homeposter.module.css';

const data = [1,2,3,4,5,6]
const HomePoster = () => {
    return(
        <div className={homeposter.main__Component}>
           <h1 className={homeposter.heading}> Good evening</h1>
        <div className={homeposter.home__Skeleton}>
          {data.map(element => <div className={homeposter.card__Xl}>
            <p className={homeposter.home__Img} ></p>
            <p className={homeposter.hom_Subheading}></p>
            </div>)}
            <div className={homeposter.home__Skeleton1}>
           {data.map(element =>  <div className={homeposter.card__Xxl}>
            <p  className={homeposter.home__Img1}></p>
            <p  className={homeposter.home_Subheading1}></p>
            <p  className={homeposter.home_Subheading2}></p>
            </div>)}
            </div>
            </div>  
        </div>
    )
}

export default HomePoster