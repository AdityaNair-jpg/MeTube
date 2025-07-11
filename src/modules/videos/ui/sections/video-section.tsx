"use client";

import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { VideoPlayer, VideoPlayerSkeleton } from "../components/video-player";
import { VideoBanner } from "../components/video-banner";
import { VideoTopRow, VideoTopRowSkeleton } from "../components/video-top-row";
import { useAuth } from "@clerk/nextjs";

interface VideosSectionProps {
    videoId: string;
}

export const VideosSection = ({ videoId }: VideosSectionProps) => {
    return (
        <Suspense fallback={<VideosSectionSkeleton />}>
            <ErrorBoundary fallback={<p>Error</p>}>
                <VideosSectionSuspense videoId={videoId}/>
            </ErrorBoundary>
        </Suspense>
    )
};

const VideosSectionSkeleton = () => {
    return (
        <>
            <VideoPlayerSkeleton />
            <VideoTopRowSkeleton />
        </>
    )
}

const VideosSectionSuspense = ({ videoId }: VideosSectionProps) => {
    const { isSignedIn } = useAuth();
    const [video] = trpc.videos.getOne.useSuspenseQuery({ id: videoId });
    const utils = trpc.useUtils();
    const createView = trpc.videoViews.create.useMutation({
        onSuccess: () => {
            utils.videos.getOne.invalidate({ id: videoId });
        },
    });
    const handlePlay = () => {
        if (!isSignedIn) return;
    };

    return (
        <>
        <div className={cn(
            "aspect-video bg-black rounded-xl overflow-hidden relative",
            video.muxStatus !== "ready" && "rounded-b-none",
        )}>
            <VideoPlayer
                autoPlay
                onPlay={handlePlay}
                playbackId={video.muxPlaybackId}
                thumbnailUrl={video.thumbnailUrl}
            />
            </div>
            <VideoBanner status={video.muxStatus}/>
            <VideoTopRow video={video} />
        </>
    )
};