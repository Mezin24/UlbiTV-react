const MyInput = (props) => {
  return (
    <input
      style={{
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '7px',
        color: '#242424',
        display: 'block',
        width: '100%',
        margin: '0.5rem 0',
      }}
      {...props}
    />
  );
};
export default MyInput;
