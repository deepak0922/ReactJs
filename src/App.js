import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal.js';


import './App.css';

const App =() => {
  const [courseGoals, setCourseGoals] =  useState([
        {id: 'cg1', text: 'Finish the Course'},
        {id: 'cg2', text: 'Lean and implement the react'},
        {id: 'cg3', text: 'Develop the project based on it'},
]);

const addGoalHandler = (newGoal) =>{
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
    };



return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal  onAddGoal={addGoalHandler}/>
    <GoalList goals={courseGoals} />
</div>;
};

export default App;
