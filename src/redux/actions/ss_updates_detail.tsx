import { DHPenaltyWhatsapp } from "@redux/reducers/q_report_favorite";
import { QRWModulePosition } from "@type/wpk_long";

export const saveUploadHistory = (video: QRWModulePosition) => ({
    type: DHPenaltyWhatsapp.DHMember,
    payload: video,
});

export const removeUploadHistory = (ids: number[]) => ({
    type: DHPenaltyWhatsapp.DHProject,
    payload: ids,
});
