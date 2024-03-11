import { RootStackScreenProps } from "@type/yys_settings";
import ScreenContainer from "../../components/container/yys_executor_expand";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import EmptyList from '../../components/common/yys_goal_utils';

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