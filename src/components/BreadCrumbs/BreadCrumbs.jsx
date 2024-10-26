import { RightOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation()
    const crumbs = location.pathname.split('/').slice(1, location.pathname.length)
    console.log('LOCATION', crumbs)
    return (
        <div>
            {crumbs.map((crumb, index) => {
                const decodedCrumb = decodeURI(crumb)
                return (
                    <span key={index}>
                        {index !== crumbs.length - 1 ? <Link to={`/${decodedCrumb}`}> {decodedCrumb} </Link> : <span>{decodedCrumb}</span>}
                        {index !== crumbs.length - 1 && <span> <RightOutlined /> </span>}
                    </span>
                )})}
        </div>
    )
}

export default BreadCrumbs
