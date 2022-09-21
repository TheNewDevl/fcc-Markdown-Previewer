import { Window } from "../Window/Window";
import { useEffect, useRef } from "react";
import "./Preview.scss";

type PreviewProps = {
  output: string;
};

const Preview = ({ output }: PreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);
  console.log(output);
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.innerHTML = output;
    }
  }, [output]);

  return (
    <Window windowTitle="Preview">
      <div ref={previewRef} id="preview"></div>
    </Window>
  );
};

export default Preview;
