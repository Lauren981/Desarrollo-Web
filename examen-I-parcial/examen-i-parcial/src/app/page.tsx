import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-4xl font-extrabold leading-tight text-center">
        Administrador de Gastos Personales
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/login">
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white text-lg font-semibold transition-all hover:bg-blue-700">
            Iniciar Sesión
          </button>
        </Link>
        <Link href="/presupuesto">
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white text-lg font-semibold transition-all hover:bg-blue-700">
            Presupuesto Mensual
          </button>
        </Link>
        <Link href="/gastos">
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white text-lg font-semibold transition-all hover:bg-blue-700">
            Registro de Gastos
          </button>
        </Link>
      </div>
    </div>
  );
}
