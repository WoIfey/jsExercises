import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://10.111.3.78:3000/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  function getData() {
    fetchUserData();
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        onClick={getData}
        className="bg-slate-600 text-white px-4 py-2 rounded-xl"
      >
        Hämta data
      </button>
      <div>
        {users.length > 0 && (
          <ul className="p-4">
            {users.map((user) => (
              <li className="p-2 text-center" key={user.id}>
                {user.name} {user.age} <br /> {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default App;
