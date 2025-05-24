import Link from "next/link";

const Menu = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", backgroundColor: "#eee" }}>
            <Link href="/panel_administracion">Inicio</Link>
            <Link href="/presupuesto">Presupuesto</Link>
            <Link href="/gastos">Gastos</Link>
        </nav>
    );
};

export default Menu;