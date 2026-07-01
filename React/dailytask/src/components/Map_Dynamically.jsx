export const Map_Dynamically = () => {
  const Tasks = ["task1", "Task2", "Task3", "Task4"];
  return (
    <div>
      {Tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </div>
  );
};
