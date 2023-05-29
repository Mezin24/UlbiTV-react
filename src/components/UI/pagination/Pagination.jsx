import { usePagination } from '../../../hooks/usePagination';
import MyButton from '../button/MyButton';

const Pagination = ({ totalPages, page, setPage }) => {
  const pages = usePagination(totalPages);
  return (
    <div className='paginator'>
      {pages.map((p) => (
        <MyButton
          key={p}
          style={
            p === page ? { backgroundColor: 'white', color: '#242424' } : {}
          }
          onClick={() => setPage(p)}
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
};
export default Pagination;
