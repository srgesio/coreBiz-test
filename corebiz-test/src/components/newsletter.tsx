import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { sendNewsletter } from "../utils/sendNewsletter"
import '../styles/newsletter.css'

type NewsLetterProps = {
    title: string
    sendCallback: Function
}

export default function NewsLetter(props: NewsLetterProps) {
    const [newsResponse, setNewsResponse] = useState()
    const { onChange, onSubmit, values } = useForm(() => sendNewsletter(values, setNewsResponse), {
        email: "",
        name: "",
    })
    return (
        <div className="newsletter-container">
            <div className="title">

                {props.title}
            </div>
            <form className="form-newsletter" onSubmit={onSubmit}>
                <div className="inputs-newsletter">


                    <input
                        className="input-text"
                        name='name'
                        id='name'
                        type='name'
                        placeholder='Digite seu nome'
                        onChange={onChange}
                        required
                    />
                    <input
                        className="input-text"
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Digite seu email'
                        onChange={onChange}
                        required
                    />
                    <button className="button-newsletter" type='submit'>Eu quero!</button>
                </div>
            </form>
        </div>
    )
}