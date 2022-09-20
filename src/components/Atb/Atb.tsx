import "./Atb.scss"

export const Att = () => {
  return (
    <p className="author">Designed and Coded with&nbsp;
      <svg className="bi bi-heart-fill" fill="currentColor" height="16" style={{color: "red"}}
           viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              fill="red"></path>
      </svg>
      &nbsp;by <a href="https://github.com/TheNewDevl" target="_blank">Karl Code</a>
    </p>
  )
}