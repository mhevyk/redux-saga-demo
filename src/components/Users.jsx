import { fetchUsers } from "../store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const { users, loading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Users</h1>
      <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
      <br />
      <br />
      {loading && <div>Users are loading...</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      <ul>
        {users.length > 0 &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}
