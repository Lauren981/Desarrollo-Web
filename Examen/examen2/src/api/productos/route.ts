import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse' 

type Producto = {
  nombre: string;
  categoria: string;
  marca: string;
  precio: number;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const groupBy = url.searchParams.get('groupBy');

  const filePath = path.join(process.cwd(), 'src', 'data', 'Product.v6.csv');
  const file = fs.readFileSync(filePath, 'utf8');

  const parsed = Papa.parse<Producto>(file, {
    header: true,
    skipEmptyLines: true,
  });

  const productos = parsed.data.map(p => ({
    ...p,
    precio: Number(p.precio),
  }));

  if (groupBy === 'categoria') {
    const result = agruparPorPromedio(productos, 'categoria');
    return NextResponse.json(result);
  }

  if (groupBy === 'marca') {
    const result = agruparPorConteo(productos, 'marca');
    return NextResponse.json(result);
  }

  return NextResponse.json(productos);
}

function agruparPorPromedio(data: Producto[], campo: 'categoria') {
  const agrupado: Record<string, { total: number; count: number }> = {};
  data.forEach(p => {
    if (!agrupado[p[campo]]) agrupado[p[campo]] = { total: 0, count: 0 };
    agrupado[p[campo]].total += p.precio;
    agrupado[p[campo]].count += 1;
  });

  return Object.entries(agrupado).map(([categoria, datos]) => ({
    categoria,
    promedio: datos.total / datos.count,
  }));
}

function agruparPorConteo(data: Producto[], campo: 'marca') {
  const conteo: Record<string, number> = {};
  data.forEach(p => {
    conteo[p[campo]] = (conteo[p[campo]] || 0) + 1;
  });

  return Object.entries(conteo).map(([marca, cantidad]) => ({
    marca,
    cantidad,
  }));
}
export async function POST(request: Request) {
  const newProduct: Producto = await request.json();
  const filePath = path.join(process.cwd(), 'src', 'data', 'Product.v6.csv');

  // Read existing data
  const file = fs.readFileSync(filePath, 'utf8');
  const parsed = Papa.parse<Producto>(file, {
    header: true,
    skipEmptyLines: true,
  });

  // Add new product
  parsed.data.push(newProduct);

  // Write back to CSV
  const csv = Papa.unparse(parsed.data);
  fs.writeFileSync(filePath, csv);

  return NextResponse.json({ message: 'Producto agregado exitosamente' });
}
