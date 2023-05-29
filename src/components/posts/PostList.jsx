import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import styles from './postList.module.css';

const PostList = ({ title, posts, handleDelete }) => {
  if (posts.length === 0) {
    return (
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>
        No posts, add some
      </h1>
    );
  }
  return (
    <section className={styles.list}>
      <h1 className={styles.title}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} classNames='post' timeout={500}>
            <PostItem post={post} index={post.id} handleDelete={handleDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};
export default PostList;
