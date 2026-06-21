import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "eisha-kanth.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Eisha-Kanth-Resume.pdf"',
    },
  });
}
