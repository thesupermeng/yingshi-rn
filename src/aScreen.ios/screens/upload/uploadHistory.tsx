import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import EmptyList from '../../components/common/emptyList';

export const UploadHistory = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadHistory'>) => {

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title="上传记录" />

            <EmptyList description="暂无上传成功视频" />
        </ScreenContainer>
    );
}