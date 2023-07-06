import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { RootState } from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { Button, Dialog } from '@rneui/themed';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import FeedbackSuccessIcon from '../../../static/images/feedback_success.svg'

export default ({ navigation }: RootStackScreenProps<'反馈'>) => {
    const { colors, textVariants, icons } = useTheme();
    const [text, setTextInput] = React.useState('');
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我要反馈' />
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Text style={{ ...textVariants.header, marginBottom: 20 }}>问题反馈:</Text>
                <TextInput
                    style={{ ...styles.input, backgroundColor: colors.card2, ...textVariants.body }}
                    onChangeText={setTextInput}
                    placeholder="请详细描述您的问题和建议"
                    editable
                    multiline
                    placeholderTextColor={colors.muted}
                    value={text}
                    rows={8}
                    maxLength={1000}
                    textAlignVertical='top'
                    blurOnSubmit
                />
            </View>
            <TouchableOpacity onPress={() => {
                setTextInput('');
                setIsDialogOpen(true);
            }} >
                <View style={{ ...styles.submitBtn, backgroundColor: text ? colors.primary : colors.card2 }}>
                    <Text style={{ ...textVariants.body, fontWeight: '600', color: text ? colors.background : colors.muted }}>提交</Text>
                </View>
            </TouchableOpacity>
            <Dialog
                isVisible={isDialogOpen}
                overlayStyle={{ backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay }}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                onBackdropPress={() => setIsDialogOpen(false)}
            >
                <FeedbackSuccessIcon />
                <Text style={textVariants.bigHeader}>反馈提交成功</Text>
            </Dialog>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({
    topNav: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        borderBottomWidth: 1,
        height: 200,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
    },
    submitBtn: {
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        borderRadius: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});