import { UserAvatar } from "@/components/user-avatar";
import { VideoGetOneOutput } from "../../types";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SubscriptionButton } from "@/modules/subscriptions/ui/components/subscription-button";
import { UserInfo } from "@/modules/users/ui/components/user-info";
import { UseSubscription } from "@/modules/subscriptions/hooks/use-subscription";

interface VideoOwnerProps {
    user: VideoGetOneOutput["user"];
    videoId: string;
};

export const VideoOwner = ({ user, videoId}: VideoOwnerProps) => {
    const { userId: clerkUserId, isLoaded } = useAuth();
    const { isPending, onClick } = UseSubscription({
        userId: user.id,
        isSubscribed: user.viewerSubscribed,
        fromVideoId: videoId,
    })
        return (
            <div className="flex items-center sm:items-start justify-between sm:justify-start gap-8 min-w-0">
                <Link href={`/users/${user.id}`}>
                    <div className="flex items-center gap-3 min-w-0">
                       <div className="flex flex-row gap-4 min-w-0"> 
                        <UserAvatar size="lg" imageUrl={user.imageUrl} name={user.name} />
                        <div className="flex flex-col gap-1">
                        <UserInfo size="lg" name={user.name}/>
                        <span className="text-sm text-muted-foreground line-clamp-1">
                            {user.subscriberCount} subscribers
                        </span>
                        </div>
                        </div>
                    </div>
                </Link>
                {clerkUserId === user.clerkId ? (
                    <Button
                        variant="secondary"
                        className="rounded-full"
                        asChild
                    >
                        <Link href={`/studio/videos/${videoId}`}>
                        Edit Video
                        </Link>
                    </Button>
                ) : (
                    <SubscriptionButton 
                        onClick={onClick}
                        disabled={isPending || !isLoaded}
                        isSubscribed={user.viewerSubscribed}
                        className="flex-none"
                    />
                )}
            </div>
        );
    };
