import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { Producto } from '@/types/producto';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const groupBy = url.searchParams.get('groupBy');

    const filePath = path.join(process.cwd(), 'src', 'data', 'Product_v6.csv');
    const file = fs.readFileSync(filePath, 'utf8');

    const parsed = Papa.parse<Producto>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    const productos = parsed.data;

    if (groupBy === 'categoria') {
      const result = agruparPorPromedio(productos, 'category.code');
      return NextResponse.json(result);
    }

    if (groupBy === 'marca') {
      const result = agruparPorConteo(productos, 'brand.code');
      return NextResponse.json(result);
    }

    return NextResponse.json(productos);
  } catch (error) {
    console.error('API productos error:', error);
    return new Response('Error interno en la API', { status: 500 });
  }
}

function agruparPorPromedio(data: Producto[], campo: 'category.code') {
  const agrupado: Record<string, { total: number; count: number }> = {};
  data.forEach(p => {
    if (!agrupado[p[campo]]) agrupado[p[campo]] = { total: 0, count: 0 };
    agrupado[p[campo]].total += p.value;
    agrupado[p[campo]].count += 1;
  });

  return Object.entries(agrupado).map(([categoria, datos]) => ({
    categoria,
    promedio: datos.total / datos.count,
  }));
}

function agruparPorConteo(data: Producto[], campo: 'brand.code') {
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
  const filePath = path.join(process.cwd(), 'src', 'data', 'Product_v6.csv'); 

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
