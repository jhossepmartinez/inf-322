import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const CourtCard = ({props}) => {
    const {name, startTime, endTime, imageUrl} = props
    return (
        <div className='w-64 border rounded-2xl'>
            <div><img className="rounded-t-2xl w-64 h-40 object-cover" src={imageUrl} alt="" /></div>
            <div className='px-4 py-4'>
                <h2>{name}</h2>
                <ul >
                    <li>{startTime} : {endTime}</li>
                </ul>
                <div className='pt-4'>
                    <Link className='' to={`${name}`}>Horarios<RightOutlined /></Link>
                </div>
            </div>
        </div>
    )
}

export default CourtCard

