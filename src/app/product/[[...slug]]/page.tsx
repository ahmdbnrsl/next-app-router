type DetailProductProps = { slug: Array<string> };

export default function DetailProduct({
    params
}: {
    params: DetailProductProps;
}) {
    console.log(params);
    return (
        <div>
            <h1>{psrams.slug ? 'Detail Product' : 'Product'}</h1>
            {params.slug && (
                <>
                    <p>Category : {params.slug[0]}</p>
                    <p>Gender : {params.slug[1]}</p>
                    <p>ID : {params.slug[2]}</p>
                </>
            )}
        </div>
    );
}
