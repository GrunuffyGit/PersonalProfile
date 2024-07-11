import { useRef } from "react";
import useMousePosition from "./useMousePosition";

const DinoInnerEye = () => {
    const eye = useRef();
    const {x, y} = useMousePosition();

    const xAxis = document.body.offsetWidth/2;
    const yAxis = document.body.offsetHeight - ((eye.current?.offsetParent?.clientHeight + eye.current?.offsetParent?.clientTop)/2);
    const mouseX = x - xAxis;
    const mouseY = yAxis - y;

    const degree = ((Math.atan2(mouseY, mouseX) * 180) / Math.PI) * -1 + 90;

    return(
        <div className='dino-inner-eye' ref={eye} style={{transform: `rotate(${degree}deg)`}}/>
    )
}

export default DinoInnerEye;