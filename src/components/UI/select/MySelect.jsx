const MySelect = ({ value, onChange, options, defaultValue }) => {
  return (
    <select
      value={value}
      style={{ marginTop: '1rem', padding: '7px' }}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value='' disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default MySelect;
