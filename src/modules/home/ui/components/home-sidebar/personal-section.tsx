"use client"
import { ThumbsUpIcon, HistoryIcon, ListVideoIcon } from "lucide-react"
import { url } from "inspector"
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem  } from "@/components/ui/sidebar";
import Link from "next/link";
const items = [
{
title: "History",
url: "/playlists/history",
icon: HistoryIcon,
auth: true,
},
{
title: "Subscriptions",
url: "/feed/subscriptions",
icon: ThumbsUpIcon,
auth: true,
},
{
title: "Trending",
url: "/feed/trending",
icon: ListVideoIcon,
auth: true,
}
];

export const PersonalSection = () => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
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
