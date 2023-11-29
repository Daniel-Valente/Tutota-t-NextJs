import Navbar from "@/app/ui/home/navbar";
import { SideNav } from "../ui/message/sidenav";
import { CreatePostModal } from "../ui/home/create-post-modal";
import { PostModal } from "../ui/home/post/[id]/post-modal";

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
                    { children }
                </div>
            </div>
            <CreatePostModal />
            <PostModal />
        </>
    )
}
