'use client'
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { promedioPorCategoria } from "../../services/productoService";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)
export default function Home() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        const load = async () => {
            const DATA = await promedioPorCategoria()
            setDatos(DATA)
        }
        load()
    }, [])
    const data = {
        labels: datos.map((l: any) => l.codigo_categoria),
        datasets: [
            {
                label: 'Promedio de productos',
                data: datos.map((c: any) => c.valor_promedio),
                backgroundColor: '#4f4bc0',
                borderColor: '#4b5bc0',
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#ab4bc0'
            }
        ]
    }
    return (
        <div className="container p-5 d-flex flex-column align-items-center">
            <h1 className="text-center">Examen de Desarrollo de Aplicaciones Web 2</h1>
            <h4>Promedio de productos por categorias</h4>
            <div className="" style={{ width: 800, height: 800 }}>
                <Line data={data} />
            </div>
        </div>
    );
}