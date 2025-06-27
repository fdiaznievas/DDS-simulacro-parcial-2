import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Ciudades() {
    const [ciudades, setCiudades] = useState([]);
    
    const getCiudades = () => {
        axios.get('http://localhost:3200/api/ciudades')
            .then(response => {
                // Verificar la estructura de la respuesta
                // console.log('DATA:', response.data);
                setCiudades(response.data.data);
            })
            .catch(error => {
                console.error('Error al obtener las ciudades:', error);
            });
    };

    const eliminarCiudad = (id) => {
        // Llamado a la API para eliminar una ciudad
        if(confirm('¿Estás seguro de eliminar esta ciudad?')) {
            axios.delete(`http://localhost:3200/api/ciudades/${id}`)
            .then(() => {
                getCiudades();
            })
            .catch(error => console.error('Error al eliminar:', error));
        }
    };

    const editarCiudad = (id) => {
        // Implementar la lógica para editar una ciudad
    };

    
    useEffect(() => {
        // Llamado a la API para obtener las ciudades
        getCiudades();
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
                        <th className='text-center'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ciudades.map(ciudad => (
                        <tr key={ciudad.id}>
                            <td>{ciudad.nombre}</td>
                            <td>{ciudad.provincia}</td>
                            <td>{ciudad.poblacion}</td>
                            <td className='text-center'>
                                <button className="btn btn-sm btn-outline-primary">
                                    <FaEdit />
                                </button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarCiudad(ciudad.id)}>
                                    <FaTrash />
                                </button>
                            </td>
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