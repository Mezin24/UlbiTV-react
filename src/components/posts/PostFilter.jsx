import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        defaultValue={'Sort by'}
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By body' },
        ]}
        value={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value })}
      />
      <MyInput
        placeholder={'Search'}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
};
export default PostFilter;
