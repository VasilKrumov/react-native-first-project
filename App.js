import React, { useState } from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

import { StyleSheet, View, FlatList } from 'react-native'

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])

    function addGoaldHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ])
    }
    return (
        <View style={styles.appContainer}>
            <GoalInput addGoal={addGoaldHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return <GoalItem title={itemData.item.text} />
                    }}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
})
