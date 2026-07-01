export const Print_details = (props) => {
  const { Name, Age } = props;
  return (
    <div>
      <p>Name : {Name}</p>
      <p>Age : {Age}</p>
    </div>
  );
};
