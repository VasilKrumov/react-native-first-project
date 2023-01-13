import { Text, StyleSheet, View } from 'react-native'

export default function GoalItem({ title }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#fff',
    },
})
