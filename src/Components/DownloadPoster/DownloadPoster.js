import downloadposter from './downloadposter.module.css'


const DownloadPoster = () => {
    
    const openApp = () => {
       window.open('https://www.spotify.com/in-en/download/windows/')
    }
    return (
        <div className={downloadposter.main__Component}>
            <img alt='image' src='https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png' className={downloadposter.poster__Image} />
            <h1 className={downloadposter.heading}>Seamlessly listen to music you love. Download the Spotify app for your computer.</h1>
            <button onClick={openApp} className={downloadposter.button}>Get our free app</button>
        </div>
    )
}

export default DownloadPoster