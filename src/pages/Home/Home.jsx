import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex-row items-center justify-center space-y-32 mt-12'>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center space-y-32">
                    <div className="w-full max-w-xs space-y-12">
                        <img className="rounded-xl w-full" src="https://defider-staging.kausana.cl/static/sys/images/usm-login-1.png" alt="" />
                        <span className="block text-center font-medium">Sitio web del departamento de Educación física, deportes y recreación</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between px-28 m-auto space-x-32 text-3xl">
                <Link className="btn-card" to="talleres">Talleres</Link>
                <Link className="btn-card" to="selecciones">Selecciones</Link>
                <Link className="btn-card" to="gimnasio">Gimnasio</Link>
                <Link className="btn-card" to="canchas">Canchas</Link>
            </div>
        </div>
    )
}

export default Home
