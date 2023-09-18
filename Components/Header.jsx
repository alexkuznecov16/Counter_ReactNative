import { View, Text } from 'react-native';

export default function Header() {
    return (
        <View
            style={{
                width: '100%',
                height: '50px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
            }}
        >
            <Text
                style={{
                    color: '#fff',
                }}
            >
                Counter - REACT NATIVE (18.09.2023)
            </Text>
        </View>
    );
}
