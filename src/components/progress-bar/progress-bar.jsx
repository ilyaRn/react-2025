import { React, useState, useEffect } from "react";
import styles from "./progress-bar.module.css";

function calculateScrollProgressPercent() {
    const percent = window.pageYOffset / (document.body.scrollHeight - document.documentElement.clientHeight);
    return (percent * 100).toFixed(1) + "%";    
}

export const ProgressBar = () => {
    const [width, setWidth] = useState("0%");
    useEffect(() => {
        const onScroll = () => setWidth(calculateScrollProgressPercent());
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <div className={styles.progressBar} style={{width: width}}></div>;
};