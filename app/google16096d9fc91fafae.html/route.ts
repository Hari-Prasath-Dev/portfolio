export function GET() {
  return new Response("google-site-verification: google16096d9fc91fafae.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
