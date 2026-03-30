import fs from "fs";

export async function GET() {
  const notification = fs
    .readdirSync("app")
    .filter((file) => file === "notifications.json");

  if (notification.length === 0) {
    return new Response(
      JSON.stringify({ message: "No hay notificaciones disponibles" }),
      { status: 404 },
    );
  }
  return new Response(
    JSON.stringify({
      data: JSON.parse(fs.readFileSync(`app/${notification[0]}`, "utf-8")),
    }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
