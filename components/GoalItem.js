import { Text, StyleSheet, View, Pressable, Modal } from 'react-native'

export default function GoalItem({ title, deleteGoalHandler, id }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                style={({ pressed }) => {
                    pressed && styles.pressedItem
                }}
                onPress={deleteGoalHandler.bind(this, id)}
            >
                <Text style={styles.goalText}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#fff',
        padding: 8,
    },
})
