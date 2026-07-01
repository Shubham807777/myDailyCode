export const Todo_list = () => {
  const task = 10;
  const countTask = () => {
    // if (task === 0) {
    //   return `No task aviliable`;
    // } else {
    //   return `Total task : ${task}`;
    // }
    return task === 0 ? "No task aviliable" : `Total task : ${task}`;
  };
  return (
    <div>
      <h1>{countTask()}</h1>
      <button>Click me</button>
    </div>
  );
};
