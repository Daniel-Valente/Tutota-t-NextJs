import Navbar from "../ui/home/navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar/>
            <div className='bg-base-100'>{ children }</div>
        </>
    )
}