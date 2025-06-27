import { formatDuration } from "@/lib/utils";
import Image from "next/image"
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoThumbnailProps {
    title: string;
    imageUrl?: string | null;
    previewUrl?: string | null;
    duration: number;
}

export const VideoThumbnail = ({ 
    title,
    imageUrl,
    previewUrl, 
    duration,
}: VideoThumbnailProps) => {
    return (
        <div className="relative group">
            <div className="relative w-full overflow-hidden rounded-xl aspect-video">
                <Image
                    src={imageUrl ?? THUMBNAIL_FALLBACK}
                    alt={title}
                    fill
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    // If imageUrl itself could sometimes be a GIF, you'd need logic here:
                    // unoptimized={imageUrl?.endsWith('.gif') || false}
                />
                {/* Preview Image (likely GIF or similar): Explicitly unoptimized */}
                <Image
                    src={previewUrl ?? THUMBNAIL_FALLBACK}
                    alt={title}
                    fill
                    className="h-full w-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    unoptimized={true} // FIX: Explicitly unoptimize the preview
                />
            </div>
            <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
                {formatDuration(duration)}
            </div>
        </div>

    );
};