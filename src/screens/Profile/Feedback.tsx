import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '../../types/navigationTypes';
import { useTheme } from '@react-navigation/native';
import { RootState } from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { Button } from '@rneui/themed';

export default ({ navigation }: RootStackScreenProps<'反馈'>) => {
    const { colors, textVariants, icons } = useTheme();
    const [text, setTextInput] = React.useState('');
    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title='我要反馈' />
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Text style={{...textVariants.header, marginBottom: 20}}>问题反馈:</Text>
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
            <Button
                // onPress={() => setTextInput('')}
                containerStyle={styles.submitBtn}
                color={text ? colors.primary : colors.card2}
                titleStyle={{ fontWeight: 600, color: text ? colors.background : colors.muted }}>
                提交
            </Button>
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
    },
    submitBtn: {
        borderRadius: 10,
    }
});