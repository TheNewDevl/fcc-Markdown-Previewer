import {Window} from "../Window/Window";
import {useEffect, useRef} from "react";

type PreviewProps = {
    output: string
}

const Preview = ({output}: PreviewProps) => {
    const areaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (areaRef.current) {
            areaRef.current.innerHTML = output
        }
    }, [output])

    return (
        <Window windowTitle="Preview">
            <div ref={areaRef} id="preview"></div>
        </Window>
    )
}

export default Preview