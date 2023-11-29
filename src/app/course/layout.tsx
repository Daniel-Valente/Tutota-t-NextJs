import { CreatePostModal } from "../ui/home/create-post-modal";
import Navbar from "../ui/home/navbar";
import { PostModal } from "../ui/home/post/[id]/post-modal";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar/>
            <div className='bg-base-100'>{ children }</div>
            <CreatePostModal />
            <PostModal />
        </>
    )
}