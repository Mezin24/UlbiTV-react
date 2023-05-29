import { useEffect, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import { calcTotalPages } from '../utils/pages';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/MyModal/MyModal';
import PostForm from '../components/posts/PostForm';
import PostFilter from '../components/posts/PostFilter';
import Loader from '../components/UI/loader/Loader';
import PostList from '../components/posts/postList';
import Pagination from '../components/UI/pagination/Pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [showModal, setShowModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
    const response = await PostService.fetchPosts(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(calcTotalPages(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const addNewPost = (post) => {
    setPosts((prev) => [...prev, post]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className='app'>
      <MyButton
        style={{ marginTop: '1rem' }}
        onClick={() => setShowModal(true)}
      >
        Create New Post
      </MyButton>
      <MyModal visible={showModal} setVisible={setShowModal}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <hr style={{ marginTop: '1rem' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <>
          <PostList
            posts={sortedAndFilteredPosts}
            title={'JS POSTS'}
            handleDelete={handleDelete}
          />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
      {error && (
        <>
          <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>
            {error.message}
          </h1>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <MyButton onClick={fetchPosts}>Try again</MyButton>
          </div>
        </>
      )}
    </div>
  );
};
export default Posts;
