import './ButtonStyle.css'

const Button = (props)=> {

    const {label} = props
    return (
        <button>{label}</button>
    )
}

export default Button