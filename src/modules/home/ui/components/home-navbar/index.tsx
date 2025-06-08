import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { Authbutton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-2 pr-5 ">
            <div className="flex items-center gap-4 w-full">
                {/* Logo and Title */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger/>
                    <Link href="/">
                    <div className="p-4 flex items-center gap-2">
                     <Image src="/metube.svg" height={50} width={50} alt="Logo"/>
                     <p className="text-2xl font-semibold tracking-tight">MeTube</p>
                     </div>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center max-w-[700px] mx-auto">
                    <SearchInput />              
                </div>
                <div className="flex-shrink-0 items-center flex gap-4">
                    <Authbutton />

                </div>

            </div>
        </nav>
    );
};