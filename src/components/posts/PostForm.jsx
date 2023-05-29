import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const initalPostValue = { title: '', body: '' };

const PostForm = ({ addNewPost }) => {
  const [post, setPost] = useState(initalPostValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost({ ...post, id: new Date() });
    setPost(initalPostValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        value={post.title}
        onChange={(e) =>
          setPost((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder={'title'}
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost((prev) => ({ ...prev, body: e.target.value }))}
        placeholder={'description'}
      />
      <MyButton style={{ backgroundColor: '#242424', color: 'white' }}>
        Create Post
      </MyButton>
    </form>
  );
};
export default PostForm;
