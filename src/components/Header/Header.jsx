import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header flex flex-row justify-between">
            <Link className="btn-header" to="talleres">Talleres</Link>
            <Link className="btn-header" to="selecciones">Selecciones</Link>
            <div className="text-gray-400 cursor-not-allowed" to="gimnasio">Gimnasios</div>
            <Link className="btn-header" to="canchas">Canchas</Link>
        </div>
    )
}

export default Header
