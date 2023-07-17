import './SliderStyle.css'

const Slider = (props) => {
   
    const { 
        value, 
        setValue,
        min, 
        max, 
        step,
        label,
        unit } = props

    return <div className='slider-wrapper'>
                <p className='text-range'>{`From ${min} ${unit}`}</p>
                <label htmlFor='range'>{label}</label>
                <input 
                type='range'
                className={`slider ${unit}`}
                id='range'
                min={min}
                max={max}
                step={step} 
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                />
                <p className='text-current-amount'>{`${value} ${unit}`}</p>
            </div>

}

export default Slider
