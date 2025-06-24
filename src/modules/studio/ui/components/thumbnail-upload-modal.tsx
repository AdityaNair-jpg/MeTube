import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";

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
    return (
        <ResponsiveModal
            title="Upload a thumbnail"
            open={open}
            onOpenChange={onOpenChange}
        >
           <UploadDropzone 
            endpoint="imageUploader"
           />
        </ResponsiveModal>
    );
};