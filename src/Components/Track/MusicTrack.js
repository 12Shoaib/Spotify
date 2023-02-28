import track from './track.module.css'

const data = [
    {
        count:1,
        image: 'https://i.scdn.co/image/ab67616d0000b273070ed56b449be8f4384a99aa',
        song : 'Kesariya- Lofi Flip',
        artist: 'VIBIE, Arjit Singh , Pritam',
        album: 'Kesariya-(Lofi-Flipflop)',
        date : '1 day ago',
        playTime: '4:00'
    },
    {
        count:2,
        image: 'https://i.scdn.co/image/ab67616d0000b273070ed56b449be8f4384a99aa',
        song : 'Kesariya- Lofi Flip',
        artist: 'VIBIE, Arjit Singh , Pritam',
        album: 'Kesariya-(Lofi-Flipflop)',
        date : '1 day ago',
        playTime: '4:00'
    }
]

const Track = () => {
    
    return (
        <div >
            {data.map((element) => <div className={track.main__Component}>
            <p className={track.track__heading}>{element.count}</p> 
            <img alt='img' src={element.image} className={track.track__Img} />
            <span className={track.wrapper}>
            <p className={track.track__Song}>{element.song}</p>
            <p className={track.track__Song2}>{element.artist}</p></span>
            <p className={track.details}>{element.album}</p>
            <p className={track.details}>{element.date}</p>
            <p className={track.details}>{element.playTime}</p>
            
            </div> )}

        </div>
    )
}
export default Track