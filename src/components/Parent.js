import { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [users, setUsers] = useState([]); // state

  const getData = useCallback(
    (param) => fetch(`https://reqres.in/api/${param}`),
    []
  );

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <div>
      <p>Data:</p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <Child data={getData} />
    </div>
  );
};

export default Parent;
