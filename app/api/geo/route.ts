export const runtime = "edge";

export async function GET(req: Request) {
  const geo = (req as any).geo;

  return new Response(
    JSON.stringify({
      country: geo?.country ?? "Only available on production",
      city: geo?.city ?? "Test on your deployed URL",
      runtime: "edge",
    }),
    { headers: { "content-type": "application/json" } }
  );
}