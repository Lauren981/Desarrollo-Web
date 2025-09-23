import axios from "axios"
import { URL_API } from "../../services/urlAPI"

export const promedioPorCategoria = async () => {
    try {
        const _res = await axios.get(`${URL_API}/promedio`)
        return _res.data
    } catch (error) {
        console.error('Error en promedioPorCategoria', error)
    }
}

export const productosPorMarca = async () => {
    try {
        const _res = await axios.get(`${URL_API}/marca`)
        return _res.data
    } catch (error) {
        console.error('Error en promedioPorCategoria', error)
    }
}