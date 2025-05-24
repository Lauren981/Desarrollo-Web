import { useEffect } from "react";

const Inicio = () => {
    useEffect(() => {
        window.location.href = "/inicio_sesion";
    }, []);

    return null;
};

export default Inicio;