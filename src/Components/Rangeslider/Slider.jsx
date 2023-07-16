import './SliderStyle.css'

const Slider = (props) => {
   
    const { 
        value, 
        setValue,
        min, 
        max, 
        step,
        label } = props

    return <>
            <label for='range'>{label}</label>
                <input 
                type='range'
                className='slider'
                id='range'
                min={min}
                max={max}
                step={step} 
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                />
            </>

}

export default Slider
