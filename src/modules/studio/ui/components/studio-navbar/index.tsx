import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Authbutton } from "@/modules/auth/ui/components/auth-button";

export const StudioNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white flex items-center shadow-md px-2 pr-5 ">
            <div className="flex items-center gap-4 w-full">
                {/* Logo and Title */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger/>
                    <Link href="/studio">
                    <div className="p-4 flex items-center gap-1">
                     <Image src="/metube.svg" height={32} width={32} alt="Logo"/>
                     <p className="text-2xl font-semibold tracking-tight">Studio</p>
                     </div>
                    </Link>
                </div>

                <div className=" flex-1">

                </div>
                <div className="flex-shrink-0 items-center flex gap-4">
                    <Authbutton />

                </div>

            </div>
        </nav>
    );
};