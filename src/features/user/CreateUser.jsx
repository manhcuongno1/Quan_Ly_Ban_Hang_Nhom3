import { useState } from 'react';
import Button from '../../ui/Button';
// import { useDispatch } from 'react-redux';
// import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // if (!username) return;
    // dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Chào mừng bạn đến với quán cà phê của chúng tôi vui lòng nhập họ tên của bạn trước khi oder:
      </p>

      <input
        type="text"
        placeholder="Họ và Tên"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Bắt đầu đặt hàng</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;