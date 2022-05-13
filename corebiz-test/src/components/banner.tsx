import Banner from '../assets/icons/Banner.jpg'
import BannerMobile from '../assets/icons/BannerMobile.jpg'
import '../styles/banner.css'
export default function Banners() {
    return (
        <>
            <div className="banner-container desktop">
                <img src={Banner} alt="Banner" />
            </div>
            <div className="banner-container mobile">
                <img src={BannerMobile} alt="Banner" />
            </div>
        </>
    )
}