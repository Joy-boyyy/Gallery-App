// Write your code here.
import './index.css'

const ThumbComponent = props => {
  const {arrayData, btnToShowen} = props
  const {thumbnailUrl, thumbnailAltText, id} = arrayData

  function btnClicked() {
    btnToShowen(id)
  }

  return (
    <li className="li">
      <button type="button" className="btn" onClick={btnClicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="imgClBtn" />
      </button>
    </li>
  )
}

export default ThumbComponent
