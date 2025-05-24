import "../styles/style.css";
import { GastoProveedor } from "../context/GastoContexto";

function Aplicacion({ Component, pageProps }) {
    return (
        <GastoProveedor>
            <Component {...pageProps} />
        </GastoProveedor>
    );
}

export default Aplicacion;

