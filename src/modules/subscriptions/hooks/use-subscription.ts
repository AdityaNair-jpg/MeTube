import { trpc } from "@/trpc/client";
import { useClerk } from "@clerk/nextjs";
import { error } from "console";
import { toast } from "sonner";

interface UseSubscriptionProps {
    userId: string;
    isSubscribed: boolean;
    fromVideoId?: string;
};

export const UseSubscription = ({
    userId,
    isSubscribed,
    fromVideoId,
}: UseSubscriptionProps) => {
    const clerk = useClerk();
    const utils = trpc.useUtils();
    const subscribe = trpc.subscriptions.create.useMutation({
        onSuccess: () => {
            toast.success("Subscribed");

            if (fromVideoId) {
                utils.videos.getOne.invalidate({ id: fromVideoId });
            }
        },
        onError: (err) => {
            toast.error("Something went wrong");

            if (err.data?.code === "UNAUTHORIZED") {
                clerk.openSignIn();
            }
        }
    });
    const unsubscribe = trpc.subscriptions.remove.useMutation({
        onSuccess: () => {
            toast.success("Subscribed");

            if (fromVideoId) {
                utils.videos.getOne.invalidate({ id: fromVideoId });
            }
        },
        onError: (err) => {
            toast.error("Something went wrong");

            if (err.data?.code === "UNAUTHORIZED") {
                clerk.openSignIn();
            }
        }
    });
    const isPending = subscribe.isPending || unsubscribe.isPending;

    const onClick = () => {
        if (isSubscribed) {
            unsubscribe.mutate({ userId });
        }else{
            subscribe.mutate({ userId });
        }
    };

    return {
        isPending,
        onClick,
    };
};