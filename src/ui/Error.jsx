import { useNavigate, useRouteError } from 'react-router-dom';
import './Error.css';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <div>
        <h1>Có gì sai ở đây 😢</h1>
        <p>{error.data || error.message}</p>
        <button onClick={() => navigate(-1)}>&larr; Trở Về</button>
      </div>
    </div>
  );
}

export default NotFound;
