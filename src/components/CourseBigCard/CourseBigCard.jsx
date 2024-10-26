import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseBigCard = ({ props }) => {
    const { time, instructor, courseCode, weekDay, courtImage, courtName } = props;
    const [enrolled, setEnrolled] = useState(false);
    const handleEnroll = () => {
        if (!enrolled) { // Only trigger the toast if not enrolled yet
            setEnrolled(true);
            toast('Inscripción realizada!');
        }
    }

    return (
        <>
            <div className='columns-2'>
                <div className="border p-4 h-64 rounded-2xl">
                    <ul className="space-y-4">
                        <li>Paralelo {courseCode}</li>
                        <li>Profesor: {instructor}</li>
                        <li>Horario: {weekDay} {time}</li>
                        <li>Lugar: {courtName}</li>
                    </ul>
                    <div className='mt-8'>
                        <button 
                            className='border rounded-xl px-6 py-2'
                            onClick={handleEnroll}
                            disabled={enrolled} // Disable button if already enrolled
                        >
                            {enrolled ? 'Inscripto' : 'Inscribirse'} 
                        </button>
                    </div>
                </div>
                <div className="">
                    <img className='w-96 h-64 rounded-2xl' src={courtImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default CourseBigCard;

