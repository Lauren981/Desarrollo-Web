import { createContext, useContext, useState } from "react";

const GastoContexto = createContext();

export const GastoProveedor = ({ children }) => {
    const [presupuesto, setPresupuesto] = useState(0);
    const [gastos, setGastos] = useState([]);

    const agregarGasto = (nuevoGasto) => {
        setGastos([...gastos, nuevoGasto]);
    };

    return (
        <GastoContexto.Provider value={{ presupuesto, setPresupuesto, gastos, agregarGasto }}>
            {children}
        </GastoContexto.Provider>
    );
};

export const useGastoContexto = () => {
    return useContext(GastoContexto);
};