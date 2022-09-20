import './Window.scss'
import {PropsWithChildren, useState} from "react";

interface WindowProps extends PropsWithChildren {
    windowTitle: string,
}

export const Window = ({windowTitle, children}: WindowProps) => {
    const [isFs, setIsFs] = useState(false)

    const handleClassName = () => {
        return isFs ? "window full-screen" : "window"
    }
    const handleFsBtnContent = () => {
        return isFs ? "X" : "Full Screen"
    }

    return (
        <section className={handleClassName()}>
            <header>
                <span className="round"></span>
                <span className="round"></span>
                <span className="round"></span>
                <h1 className="window__title">{windowTitle}</h1>
                <button className="fs-btn"
                        onClick={() => setIsFs(!isFs)}>{handleFsBtnContent()}</button>
            </header>

            <main className="main">
                {children}
            </main>
        </section>
    )
}

