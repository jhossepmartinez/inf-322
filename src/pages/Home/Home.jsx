import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex-row items-center justify-center space-y-32 mt-12'>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center space-y-32">
                    <div className="w-full max-w-lg space-y-12"> 
                        <img className="rounded-xl w-full" src="https://defider-staging.kausana.cl/static/sys/images/usm-login-1.png" alt="" />
                        <span className="block text-center font-medium">Sitio web del departamento de Educación física, deportes y recreación</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row justify-between px-28 m-auto space-x-32 text-3xl">
                <div className='card w-64 border rounded-2xl'>
                    <div className='px-4 py-4'>
                        <Link className="btn-card" to="talleres">Talleres</Link>
                        <div className='pt-4 text-xl'>
                            Paralelos
                        </div>
                        <div className='pt-4 text-xl'>
                            Inscripciones
                        </div>
                    </div>
                </div>

                <div className='card w-64 border rounded-2xl'>
                    <div className='px-4 py-4'>
                        <Link className="btn-card" to="selecciones">Selecciones</Link>
                        <div className='pt-4 text-xl'>
                            Información
                        </div>
                    </div>
                </div>

                <div className='card w-64 border rounded-2xl'>
                    <div className='px-4 py-4'>
                        <Link className="btn-card" to="gimnasio">Gimnasio</Link>
                        <div className='pt-4 text-xl'>
                            Horarios
                        </div>
                        <div className='pt-4 text-xl'>
                            Inscripciones
                        </div>
                        <div className='pt-4 text-xl'>
                            Equipamiento
                        </div>
                    </div>
                </div>

                <div className='card w-64 border rounded-2xl'>
                    <div className='px-4 py-4'>
                        <Link className="btn-card" to="canchas">Canchas</Link>
                        <div className='pt-4 text-xl'>
                            Horarios
                        </div>
                        <div className='pt-4 text-xl'>
                            Inscripciones
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

