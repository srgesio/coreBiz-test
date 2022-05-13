import Banner from '../assets/icons/Banner.jpg'
import '../styles/banner.css'
export default function Banners() {
    return (
        <div className="banner-container">
            <img src={Banner} alt="Banner" />
        </div>
    )
}