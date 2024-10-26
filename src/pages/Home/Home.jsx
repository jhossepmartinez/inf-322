import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-row justify-between px-28 m-auto space-x-32">
            <Link to="talleres">Talleres</Link>
            <Link to="selecciones">Selecciones</Link>
            <Link to="gimnasio">Gimnasio</Link>
            <Link to="canchas">Canchas</Link>
        </div>
    )
}

export default Home
