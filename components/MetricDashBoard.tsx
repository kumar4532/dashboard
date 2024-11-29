import React from 'react'
import data from "../data/task-data.json"
import MetricCard from './MetricCard';

const MetricDashBoard = () => {
    const {
        active_users, 
        average_session_length_seconds,
        current_knowledge_percentage, 
        questions_answered, 
        starting_knowledge_percentage} = data.metrics;

    const Knowledge_gain = Math.floor(((current_knowledge_percentage - starting_knowledge_percentage)/starting_knowledge_percentage) * 100);
    const minutes = Math.floor(average_session_length_seconds / 60);
    const seconds = average_session_length_seconds % 60;

    const session_min = `${minutes}m ${seconds}s`
      

  return (
    <>
      <MetricCard
        title="Active Users" 
        value={active_users.current} 
        total={active_users.total}
        isPercentage = {false}
        />
      <MetricCard
        title="Questions Answered" 
        value={questions_answered}
        total={null}
        isPercentage = {false}
        />
      <MetricCard
        title="Av. Session Length" 
        value={session_min}
        total={null}
        isPercentage = {false}
        />
      <MetricCard
        title="Starting Knowledge" 
        value={current_knowledge_percentage}
        total={null}
        isPercentage = {true}
        />
      <MetricCard
        title="Starting Knowledge" 
        value={starting_knowledge_percentage}
        total={null}
        isPercentage = {true}
        />
      <MetricCard
        title="Knowledge Gain" 
        value={Knowledge_gain}
        total={null}
        isPercentage = {true}
        />
    </>
  )
}

export default MetricDashBoard