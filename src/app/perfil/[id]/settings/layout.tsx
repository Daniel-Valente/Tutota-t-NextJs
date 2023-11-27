import { SideNav } from "@/app/ui/perfil/[id]/settings/sidenav";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex flex-row">
                <div className='lg:w-3/12 hidden lg:block bg-base-300 border-t-2 border-base-200'>
                    <SideNav />
                </div>
                <div className='w-full lg:w-9/12'>
                    { children }
                </div>
            </div>
        </>
    )
}
