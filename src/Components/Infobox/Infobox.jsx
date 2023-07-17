import './InfoboxStyle.css'

const Infobox = (props) => {

    const { amountPerMonth } = props

    return (
        <>
            <div className='box'>
                <p className='text-headline'>Example of monthly cost</p>
                <p className='text-amount'>{amountPerMonth} SEK/month</p>
                <div className='arrow'></div>
            </div>
        </>
    )
}

export default Infobox