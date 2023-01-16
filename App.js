import React, { useState } from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar'

import { StyleSheet, View, FlatList, Button } from 'react-native'

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [courseGoals, setCourseGoals] = useState([])

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function addGoaldHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ])
        endAddGoalHandler()
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#A065EC" onPress={startAddGoalHandler} />
                <GoalInput addGoal={addGoaldHandler} removeGoal={endAddGoalHandler} modalIsVisible={modalIsVisible} />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    title={itemData.item.text}
                                    deleteGoalHandler={deleteGoalHandler}
                                    id={itemData.item.id}
                                />
                            )
                        }}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a',
    },
    goalsContainer: {
        flex: 5,
    },
})
