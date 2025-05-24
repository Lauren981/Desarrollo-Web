import { useState, useEffect } from "react";
import Diseño from "../components/Diseño";
import axios from "axios";

const Gastos = () => {
    const [categoria, setCategoria] = useState("");
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [listaGastos, setListaGastos] = useState([]);
    const [gastoEditar, setGastoEditar] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/gasto")
            .then(response => setListaGastos(response.data))
            .catch(error => console.error("Error al obtener los gastos", error));
    }, []);

    const agregarGasto = () => {
        const nuevoGasto = { categoria, monto, descripcion, fecha };

        axios.post("http://localhost:5000/gasto", nuevoGasto)
            .then(() => {
                setListaGastos([...listaGastos, nuevoGasto]);
                setCategoria("");
                setMonto("");
                setDescripcion("");
                setFecha("");
            })
            .catch(error => console.error("Error al guardar el gasto", error));
    };

    const editarGasto = (gasto) => {
        setCategoria(gasto.categoria);
        setMonto(gasto.monto);
        setDescripcion(gasto.descripcion);
        setFecha(gasto.fecha);
        setGastoEditar(gasto.idgasto);
    };

    const actualizarGasto = () => {
        if (!gastoEditar) return;

        const gastoActualizado = { categoria, monto, descripcion, fecha };

        axios.put(`http://localhost:5000/gasto/${gastoEditar}`, gastoActualizado)
            .then(() => {
                setListaGastos(listaGastos.map(gasto => gasto.idgasto === gastoEditar ? gastoActualizado : gasto));
                setCategoria("");
                setMonto("");
                setDescripcion("");
                setFecha("");
                setGastoEditar(null);
            })
            .catch(error => console.error("Error al actualizar el gasto", error));
    };

    const eliminarGasto = (id) => {
        axios.delete(`http://localhost:5000/gasto/${id}`)
            .then(() => {
                setListaGastos(listaGastos.filter(gasto => gasto.idgasto !== id));
            })
            .catch(error => console.error("Error al eliminar el gasto", error));
    };

    return (
        <Diseño>
            <h2>Registro de Gastos</h2>

            <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            <input type="number" placeholder="Monto" value={monto} onChange={(e) => setMonto(e.target.value)} />
            <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

            {gastoEditar ? (
                <button onClick={actualizarGasto}>Actualizar Gasto</button>
            ) : (
                <button onClick={agregarGasto}>Guardar Gasto</button>
            )}

            <h3>Lista de Gastos</h3>
            <ul>
                {listaGastos.map((gasto) => (
                    <li key={gasto.idgasto}>
                        <strong>{gasto.categoria}</strong> - Lps. {gasto.monto} ({gasto.descripcion}) - {gasto.fecha}
                        <button onClick={() => editarGasto(gasto)}>Editar</button>
                        <button onClick={() => eliminarGasto(gasto.idgasto)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </Diseño>
    );
};

export default Gastos;