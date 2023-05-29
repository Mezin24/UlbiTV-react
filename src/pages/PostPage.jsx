import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPost, isLoadingPost, errorPost] = useFetching(async () => {
    const response = await PostService.fetchPost(id);
    setPost(response.data);
  });

  const [fetchComments, isLoadingComments, errorComments] = useFetching(
    async () => {
      const response = await PostService.fetchPostComments(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  if (isLoadingPost) {
    return <Loader />;
  }

  if (errorPost) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <section style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Post page: {id} id</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h5>Comments:</h5>
      {comments.map((c) => (
        <div key={c.id}>
          <strong>{c.email}</strong> <br />
          <small>{c.body}</small>
        </div>
      ))}
    </section>
  );
};
export default PostPage;
