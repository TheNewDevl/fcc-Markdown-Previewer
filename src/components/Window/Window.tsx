import './Window.scss'
import {PropsWithChildren} from "react";

interface WindowProps extends PropsWithChildren {
    windowTitle: string,
}

export const Window = ({windowTitle, children}: WindowProps) => {
    return (
        <section className="window">
            <header>
                <span className="round"></span>
                <span className="round"></span>
                <span className="round"></span>
                <h1 className="window__title">{windowTitle}</h1>
            </header>

            <main>
                {children}
            </main>
        </section>
    )
}

