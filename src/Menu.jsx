import React, {useEffect, useState} from "react";
var Name = "Valentin Popov"
export const Menu = () => {
    const [isOpen, setOpen] = useState();
    useEffect(()=>{
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;

        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        });

        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;

            if (
                startTouchX < 100 &&
                Math.abs(endTouchY - startTouchY) < 30 &&
                endTouchX > startTouchX
            )
                setOpen(true);
            if (
                Math.abs(endTouchY - startTouchY) < 30 &&
                endTouchX < startTouchX
            )
                setOpen(false);
        });
    }, []);

    return (
        <div className="Sidebar">
            <div className="btn-opener">
                <button><img src="/Images/Arrow.png" alt="" /></button>
            </div>
            <div className={`side ${isOpen ? "active" : ""} `}>
                <p className="side-name">{Name}</p>
                <button>Какой-то функционал</button>
                <button>Какой-то функционал</button>
                <button>Какой-то функционал</button>
            </div>
        </div>
    )
}