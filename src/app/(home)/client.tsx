"use client";

import { trpc } from "@/trpc/client";
import { use, useEffect } from "react";

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Aditya",
    })



    return (
        <div>
            Page client says: {data.greeting}
        </div>
    );


}