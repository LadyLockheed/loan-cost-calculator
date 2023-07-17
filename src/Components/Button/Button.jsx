import './ButtonStyle.css'

const Button = (props)=> {

    const {label, url} = props

    const handleClick = ()=> {
        console.log('you are currently beeing forwared to this url: ', url)
    }
    
    return (
        <button onClick={handleClick}>{label}</button>
    )
}

export default Button