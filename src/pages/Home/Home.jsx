import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-row justify-between px-28 m-auto space-x-32 text-3xl">
            <Link className="btn-card" to="talleres">Talleres</Link>
            <Link className="btn-card" to="selecciones">Selecciones</Link>
            <Link className="btn-card" to="gimnasio">Gimnasio</Link>
            <Link className="btn-card" to="canchas">Canchas</Link>
        </div>
    )
}

export default Home
