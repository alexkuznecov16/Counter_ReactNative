import { View, Text } from 'react-native';

export default function Footer() {
    return (
        <View
            style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2a2a2a',
            }}
        >
            <Text
                style={{
                    color: '#fff',
                }}
            >
                Alexander Kuznecov 2023
            </Text>
        </View>
    );
}
