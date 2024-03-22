import { StyleSheet } from 'react-native';

export default ({
    colors,
}: any) => StyleSheet.create({
    container: {
        backgroundColor: '#14161A',
        width: '100%',
        height: '100%',
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
    chatGroupText: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 10,
    },
    chatNameText: {
        color: 'yellow',
        marginRight: 10,
    },
    chatLeftContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
    },
    chatTextLeftContainer: {
        flexDirection: 'row',
        flex: 1,
        maxWidth: '60%',
    },
    chatTriangleLeftContainer: {
        width: 0,
        height: 0,
        right: -1,
        borderTopWidth: 15,
        borderLeftWidth: 10,
        borderTopColor: '#2D2D2D',
        borderLeftColor: 'transparent',
    },
    chatMessageLeftContainer: {
        backgroundColor: '#2D2D2D',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    chatRightContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
    },
    chatTextRightContainer: {
        flexDirection: 'row',
        flex: 1,
        maxWidth: '60%',
        justifyContent: 'flex-end',
    },
    chatTriangleRightContainer: {
        width: 0,
        height: 0,
        left: -1,
        borderTopWidth: 15,
        borderRightWidth: 10,
        borderTopColor: colors.primary,
        borderRightColor: 'transparent',
    },
    chatMessageRightContainer: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
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
