export const selectHabit = (habit) => {
    console.log("You clicked this habit: ", habit)
    return {
        type: "HABIT_SELECTED",
        payload: habit 
    }
}