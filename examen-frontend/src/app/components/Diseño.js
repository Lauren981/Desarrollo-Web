import React from "react";
import Menu from "./Menu";

const Diseño = ({ children }) => {
    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Administrador de Gastos</h1>
            <Menu />
            {children}
        </div>
    );
};

export default Diseño;