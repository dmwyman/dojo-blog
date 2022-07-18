import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useLocation, Link } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state[0];

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
