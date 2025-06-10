"use client"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import { url } from "inspector"
import { SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem  } from "@/components/ui/sidebar";
import Link from "next/link";
const items = [
{
title: "Home",
url: "/",
icon: HomeIcon,
},
{
title: "Subscriptions",
url: "/feed/subscriptions",
icon: PlaySquareIcon,
auth: true,
},
{
title: "Trending",
url: "/feed/trending",
icon: FlameIcon,
}
];

export const MainSection = () => {
  return (
    <SidebarGroup>
        <SidebarContent>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                        tooltip={item.title}
                        asChild
                        isActive={false}
                        onClick={() => {}}
                        >
                           <Link href={item.url} className="flex items-center gap-4">
                           <item.icon />
                           <span>{item.title}</span>
                           </Link> 
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent>
    </SidebarGroup>
  );
};
