import Navbar from "@/app/ui/home/navbar"
import { SideNav } from "../ui/message/sidenav"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <div className="flex flex-row">
                <div className='lg:w-3/12 hidden lg:block'>
                    <SideNav />
                </div>
                <div className='w-full lg:w-9/12'>
                    {children}
                </div>
            </div>
        </>
    )
}
