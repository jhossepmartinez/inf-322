import CourseCard from '../../components/CourseCard/CourseCard';
import extracurriculars from '../../data/extracurriculars.json';

const Extracurriculars = () => {

    return (
        <div className='container-cards px-4 mt-6 flex flex-row space-x-12'>
            {extracurriculars.map((extracurricular) => {
                const name = extracurricular.name;
                const image = extracurricular.image;
                const numberOfCourses = extracurricular.courses.length;
                const weekdays = extracurricular.courses.map(course => course.weekDay);
                const uniqueWeekdays = [...new Set(weekdays)].join(', ');

                return (
                    <CourseCard key={name} props={{name, image, numCourses: numberOfCourses, weekdays: uniqueWeekdays}} />
                );
            })}
        </div>
    );
};

export default Extracurriculars;

