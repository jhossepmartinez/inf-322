import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex flex-row justify-between">
            <Link to="talleres">Talleres</Link>
            <Link className="" to="selecciones">Selecciones</Link>
            <div className="text-gray-400 cursor-not-allowed" to="gimnasio">Gimnasios</div>
            <Link to="canchas">Canchas</Link>
        </div>
    )
}

export default Header
