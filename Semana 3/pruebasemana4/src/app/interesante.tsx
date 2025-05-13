import { usarTemas } from "./page";
import { useRouter } from "next/navigation";

export default function Interesantes() {
  const { temas } = usarTemas();
  const router = useRouter();

  const temasInteresantes = temas.filter((tema) => tema.interesante);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">Pantalla de Temas Interesantes</h1>
      {temasInteresantes.map((tema) => (
        <div key={tema.id} className="topic interesting">
          {tema.titulo}
        </div>
      ))}
      <button className="volver" onClick={() => router.push("/")}>
        Volver
      </button>
    </div>
  );
}