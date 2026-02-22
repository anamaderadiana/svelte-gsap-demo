export async function load({ fetch }) {
    const res = await fetch('/api/content');
    const content = await res.json();

    return { content };
}