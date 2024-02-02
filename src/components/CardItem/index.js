import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={`${className} card-container`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <img src={imgUrl} alt={title} className="style-image" />
    </li>
  )
}

export default CardItem
