export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/health`, {
            cache: 'no-store'
        });
        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch {
        return new Response(JSON.stringify({ ok: false }), { status: 500 });
    }
}
