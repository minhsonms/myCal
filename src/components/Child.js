import { useState, useEffect } from "react";

const Child = ({ data }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [data]);

  return (
    <div>
      <p>Child component</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
};

export default Child;
