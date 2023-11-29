import Navbar from "@/app/ui/home/navbar";

import { CreatePostModal } from "../ui/home/create-post-modal";
import { PostModal } from "../ui/home/post/[id]/post-modal";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar/>
            <div>{ children }</div>

            <CreatePostModal />
            <PostModal />
        </>
    )
}
