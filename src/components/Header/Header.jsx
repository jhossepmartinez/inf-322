import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header flex flex-row justify-between">
            <Link className="btn-header font-medium" to="talleres">Talleres</Link>
            <Link className="btn-header font-medium" to="selecciones">Selecciones</Link>
            <Link className="btn-header font-medium" to="gimnasio">Gimnasios</Link>
            <Link className="btn-header font-medium" to="canchas">Canchas</Link>
        </div>
    )
}

export default Header
