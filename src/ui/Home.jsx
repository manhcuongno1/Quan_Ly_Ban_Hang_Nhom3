import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        Chào mừng các bạn đến với Coffe IT 
        <br />
        <span className="text-yellow-500">
         Nơi giao lưu học hỏi trao đổi thông tin cho những lập trình viên. 
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
