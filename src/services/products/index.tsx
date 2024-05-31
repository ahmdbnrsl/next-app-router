export const fetchData = async (url: string) => {
    // const res = await fetch('https://fakestoreapi.com/products');
    const res = await fetch(url, {
        cache: 'force-cache',
        next: { tags: ['products'] /*revalidate: 30*/ }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    return res.json();
};
