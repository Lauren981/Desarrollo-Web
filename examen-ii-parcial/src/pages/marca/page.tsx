'use client'
import { productosPorMarca } from '../../services/productoService'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function page() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        const load = async () => {
            const DATA = await productosPorMarca()
            setDatos(DATA)
        }
        load()
    }, [])
    const data = {
        labels: datos.map((l: any) => l.Marca),
        datasets: [
            {
                label: 'Cantidad',
                data: datos.map((c: any) => c.cantidad_productos),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                borderwidth: 1
            }
        ]
    }
    return (
        <div className="container p-5 d-flex flex-column align-items-center">
            <h1 className="text-center">Examen de Desarrollo de Aplicaciones Web 2</h1>
            <h4>Cantidad de productos por marca</h4>
            <div className="" style={{ width: 400, height: 400 }}>
                <Pie data={data} />
            </div>
        </div>
    )
}