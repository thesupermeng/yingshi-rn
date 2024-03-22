import { StyleSheet } from 'react-native';

export default ({
    colors,
}: any) => StyleSheet.create({
    container: {
        backgroundColor: '#14161A',
        width: '100%',
        height: '100%',
    },
    privateChatContainer: {
        flexDirection: 'row',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 6,
        marginHorizontal: 14,
        padding: 6,
        alignItems: 'center',
    },
    privateChatButton: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },
    privateChatText: {
        color: 'black',
    },
    pinChatContainer: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        marginBottom: 10,
    },
    chatlistContainer: {
        flex: 1,
        paddingHorizontal: 14,
    },
    chatContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    chatNameText: {
        color: 'yellow',
        marginRight: 10,
    },
    chatTextContainer: {
        flex: 1,
    },
    chatText: {
        color: 'white',
    },
    disconnectChatContainer: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    commentInputContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00000088',
    },
    commentInput: {
        backgroundColor: '#2A2A2A',
    },
    commentText: {
        color: 'white',
        marginHorizontal: 16,
    },
    commentInvalidText: {
        color: 'red',
        marginHorizontal: 16,
    }
});
