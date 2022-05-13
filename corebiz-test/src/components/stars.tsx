import star from '../assets/icons/star.svg'
import starEmpty from '../assets/icons/starEmpty.svg'

type StarProps = {
    rating: number
}

export default function Stars(props: StarProps) {
    if (props.rating == 5) {
        return (
            <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </div>
        )
    }
    if (props.rating == 4) {
        return (

            <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img className='empty' src={starEmpty} />
            </div>
        )
    }
    if (props.rating == 3) {
        return (

            <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
            </div>
        )
    }
    if (props.rating == 2) {
        return (

            <div className="stars">
                <img src={star} />
                <img src={star} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
            </div>
        )
    }
    if (props.rating == 1) {
        return (

            <div className="stars">
                <img src={star} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
                <img className='empty' src={starEmpty} />
            </div>
        )
    }

    return (
        <div className="stars">
            <img className='empty' src={starEmpty} />
            <img className='empty' src={starEmpty} />
            <img className='empty' src={starEmpty} />
            <img className='empty' src={starEmpty} />
            <img className='empty' src={starEmpty} />
        </div>
    )
}