export default function Layout({
    children, 
    product, 
    analytics, 
    payments
}: {
    children: React.ReactNode, 
    product: React.ReactNode, 
    analytics: React.ReactNode, 
    payments: React.ReactNode
}) {
    return (
        <div className="p-5">
            <div>
                {children}
            </div>
            <div className='mt-5 flex justify-center items-center gap-5'>
                {product}
                {analytics}
                {payments}
            </div>
        </div>
    )
}