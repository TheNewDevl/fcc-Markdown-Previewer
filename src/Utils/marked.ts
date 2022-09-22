import { marked } from "marked";
import hljs from "highlight.js";

export const markedInstance = marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code) {
    const language = "javascript";
    return hljs.highlight(code, { language }).value;
  },
});
