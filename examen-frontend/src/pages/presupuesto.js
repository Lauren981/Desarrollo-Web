import { useState } from "react";
import Diseño from "../components/Diseño";

const Presupuesto = () => {
    const [montoPresupuesto, setMontoPresupuesto] = useState("");
    const [alerta, setAlerta] = useState("");

    const manejarCambio = (e) => {
        setMontoPresupuesto(e.target.value);
        if (e.target.value >= 8000) {
            setAlerta("Ha alcanzado el 80% del presupuesto");
        } else if (e.target.value > 10000) {
            setAlerta("Has superado el límite del presupuesto, debes ajustar gastos");
        } else {
            setAlerta("");
        }
    };

    return (
        <Diseño>
            <h2>Establecer Presupuesto Mensual</h2>
            <input
                type="number"
                placeholder="Monto del presupuesto"
                value={montoPresupuesto}
                onChange={manejarCambio}
            />
            <button>Guardar Presupuesto</button>
            {alerta && (
                <p style={{ color: alerta.includes("superado") ? "red" : "yellow" }}>
                    {alerta}
                </p>
            )}
        </Diseño>
    );
};

export default Presupuesto;

