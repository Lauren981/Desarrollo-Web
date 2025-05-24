import Diseño from "../components/Diseño";

const PanelAdministracion = () => {
    return (
        <Diseño>
            <h2>Panel de Administración</h2>
            <ul>
                <li><a href="/presupuesto">Presupuesto Mensual</a></li>
                <li><a href="/gastos">Registro de Gastos</a></li>
            </ul>
        </Diseño>
    );
};

export default PanelAdministracion;