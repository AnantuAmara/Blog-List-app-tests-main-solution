// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <li className="item-container">
      <div className="title-date">
        <h1 className="heading">{title}</h1>
        <p className="paragraph-1">{publishedDate}</p>
      </div>
      <p className="paragraph">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
