import { use, useEffect, useState } from 'react';
import axios from 'axios';

function Ciudades() {
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        // Llamado a la API para obtener las ciudades
        axios.get('http://localhost:3200/api/ciudades')
            .then(response => {
                // Verificar la estructura de la respuesta
                // console.log('DATA:', response.data);
                setCiudades(response.data.data);
            })
            .catch(error => {
                console.error('Error al obtener las ciudades:', error);
            });
    }, []);

    return(
        <div>
            <h2>Ciudades</h2>

            <table className='table table-striped table-hover table-bordered'>
                <thead className='table-primary'>
                    <tr>
                        <th>Nombre</th>
                        <th>País</th>
                        <th>Población</th>
                    </tr>
                </thead>
                <tbody>
                    {ciudades.map(ciudad => (
                        <tr key={ciudad.id}>
                            <td>{ciudad.nombre}</td>
                            <td>{ciudad.provincia}</td>
                            <td>{ciudad.poblacion}</td>
                        </tr>
                    ))}
                    {ciudades.length === 0 && (
                        <tr>
                            <td colSpan="3">No hay ciudades registradas</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Ciudades;