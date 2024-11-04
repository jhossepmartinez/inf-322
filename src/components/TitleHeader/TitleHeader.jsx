import { Link } from 'react-router-dom'

const TitleHeader = () => {
    return (
        <div className="TitleHeader">
            <h1> <Link className="btn-header" to="/">UNIFIDER</Link></h1>
        </div>
    )
}

export default TitleHeader
