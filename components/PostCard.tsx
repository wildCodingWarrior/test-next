import React from "react";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="client rounded overflow-hidden shadow-lg ">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </li>
  );
};

export default PostCard;
