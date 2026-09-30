import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {

  const formData = await request.formData();
  const arquivos = formData.getAll("file") as File[];

  for (let file of arquivos) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const caminho = path.join(
      process.cwd(),
      "app",
      "upload",
      file.name
    );

    await writeFile(caminho, buffer)
  }

  return Response.json({
    mensagem: "arquivo salvo"
  })
}
