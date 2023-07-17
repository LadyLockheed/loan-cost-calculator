import './ButtonStyle.css'

const Button = (props)=> {

    const {label, url} = props

    const sendToUrl = ()=> {
        console.log('you are currently beeing forwared to this url: ', url)
    }
    
    return (
        <button onClick={sendToUrl} className='url-button'>{label}</button>
    )
}

export default Button