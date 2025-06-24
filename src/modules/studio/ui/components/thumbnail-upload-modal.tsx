import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface ThumbanilUploadModalProps {
    videoId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const ThumbanilUploadModal = ({
    videoId,
    open,
    onOpenChange,
}: ThumbanilUploadModalProps) => {

    const utils = trpc.useUtils();

    const onClientUploadComplete = () => {
        utils.studio.getOne.invalidate({ id: videoId });
        utils.studio.getMany.invalidate()
        onOpenChange(false);
    }
    return (
        <ResponsiveModal
            title="Upload a thumbnail"
            open={open}
            onOpenChange={onOpenChange}
        >
           <UploadDropzone 
            endpoint="thumbnailUploader"
            input={{ videoId }}
            onClientUploadComplete={onClientUploadComplete}
           />
        </ResponsiveModal>
    );
};