import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Có gì sai ở đây 😢</h1>
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Trở Về</button>
        </div>
    );
}

export default NotFound;
