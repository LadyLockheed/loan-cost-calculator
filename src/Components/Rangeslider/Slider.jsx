import { useState } from 'react'
import './SliderStyle.css'

const Slider = () => {

    const [value, setValue] =useState()

    return <>
                <input 
                type='range'
                className='slider'
                min='20000' 
                max='200000'
                step='10000' 
                value={value}
                    onChange={({ target: { value: radius } }) => {
                        setValue(radius);
                    }}
                />
            </>

}

export default Slider
