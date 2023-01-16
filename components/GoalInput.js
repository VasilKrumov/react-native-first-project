import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

export default function GoalInput({ addGoal, modalIsVisible, removeGoal }) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        addGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    value={enteredGoalText}
                    placeholder="Your course goal!"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="#f31282" onPress={removeGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: { width: 100, height: 100, margin: 20 },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#120438',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
})
