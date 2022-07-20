import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const getDataById = (id) => {
    return blogs.filter((item) => {
      return item.id === id;
    });
  };
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link
            to={{ pathname: `/blogs/${blog.id}`, state: getDataById(blog.id) }}
          >
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
