import React, { useState } from 'react';
import IMG_2021_05_29 from './Photos/IMG_2021_05_29.jpg';
import IMG_2021_09_02 from './Photos/IMG_2021_09_02.jpg';
import IMG_2021_10_12 from './Photos/IMG_2021_10_12.jpg';
import IMG_2021_11_08 from './Photos/IMG_2021_11_08.jpg';
import IMG_2022_05_22 from './Photos/IMG_2022_05_22.jpg';
import IMG_2022_07_23 from './Photos/IMG_2022_07_23.jpg';

import "./Photography.css"
export default function Gallery() {
    
    const [picNum, setPicNum] = useState(0)
    
    const styles = {
        maxWidth: '800px'
    }

    const photos = [
        <img className='photo' style={styles} src={IMG_2021_05_29} alt='IMG_2021_05_29.jpg'/>,
        <img className='photo' style={styles} src={IMG_2021_09_02} alt='IMG_2021_09_02.jpg'/>,
        <img className='photo' style={styles} src={IMG_2021_10_12} alt='IMG_2021_10_12.jpg'/>,
        <img className='photo' style={styles} src={IMG_2021_11_08} alt='IMG_2021_11_08.jpg'/>,
        <img className='photo' style={styles} src={IMG_2022_05_22} alt='IMG_2022_05_22.jpg'/>,
        <img className='photo' style={styles} src={IMG_2022_07_23} alt='IMG_2022_07_23.jpg'/>
    ]

    function handleImageChange(buttonDirection) {
        setPicNum(prevNum => {
            buttonDirection === 'left' ? prevNum -=1 : prevNum +=1
            if (prevNum > photos.length-1) {prevNum = 0}
            else if (prevNum < 0) {prevNum = photos.length-1}
            return prevNum;
        })
    }

    return (
        <div className='photography_content'>
            <div className='photography_leftCol'>
                <div className='photography_left_button_border'>
                    <button className='photography_left_button' onClick={() => handleImageChange('left')}></button>
                </div>
            </div>            
            <div className='photography_photo_area'>
                {photos[picNum]}
            </div>
            <div className='photography_rightCol'>
                <div className='photography_right_button_border'>
                    <button className='photography_right_button' onClick={() => handleImageChange('right')}></button>
                </div>
            </div>
        </div>
    )
}