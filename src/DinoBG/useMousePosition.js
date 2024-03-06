import { useEffect, useState } from "react";

const useMousePosition = () => {
    const [position, setPosition] = useState({
        x:0,
        y:0
    });

    const updateMousePosition = (event) => {
        const {clientX, clientY} = event;
        setPosition({
            x: clientX,
            y: clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('touchmove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('touchmove', updateMousePosition);
          };
    });

    return position;
}

export default useMousePosition;