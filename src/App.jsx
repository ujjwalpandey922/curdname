import "./App.css";
import { useState } from "react";
function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first || !last) return;
    let id = new Date().getTime();
    setUsers((pre) => [...pre, { id, first, last }]);
    setFirst("");
    setLast("");
  };
  const handleEdit = (e) => {
    setFirst(e.first);
    setLast(e.last);
    handleDelete(e);
  };
  const handleDelete = (e) => {
    let remaining = users.filter((user) => user.id !== e.id);
    setUsers(remaining);
  };
  return (
    <div className="App">
      <form action="form" onSubmit={handleSubmit} className="context container">
        <div className="email-login">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="first"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="pass-login">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="last"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>

        <button type="submit" className="addButton">
          Add Name
        </button>
      </form>
      <div className="info context">
        {users.length > 0 ? (
          <table>
            <tr>
              <th>S. No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit/Delete</th>
            </tr>

            {users.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.first}</td>
                <td>{e.last}</td>
                <td className="buttons">
                  <button className="edit" onClick={() => handleEdit(e)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(e)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : null}
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
     
    </div>
  );
}

export default App;
