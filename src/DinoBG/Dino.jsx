import { useState } from 'react';
import './Dino.css'
import DinoInnerEye from './DinoInnerEye';

const Dino = () => {
    const [isBlushing, setIsBlushing] = useState(false);
    const handleMouseEnter = () => {
        setIsBlushing(true);
    }
    const handleMouseLeave = () => {
        setIsBlushing(false);
    }

    return (
        <div className='dino-body'>
            <div className='dino-horn'/>
            <div className='dino-horn2'/>
            <div className='dino-horn3'/>
            <div className='dino-head' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div>
                    <div className='dino-eye-lid'/>
                    <div className='dino-eye eye-R'>
                        <DinoInnerEye />
                    </div>
                    <div className={`${isBlushing? 'dino-blush' : ''} blush-R`}/>
                </div>
                <div>
                    <div className='dino-eye-lid'/>
                    <div className='dino-eye eye-L'>
                        <DinoInnerEye />
                    </div>
                    <div className={`${isBlushing? 'dino-blush' : ''} blush-L`}/>
                </div>
            </div>
            
        </div>
    );
}

export default Dino;
