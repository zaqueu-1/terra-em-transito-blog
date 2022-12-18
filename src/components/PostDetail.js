import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <div className={styles.post_detail2}>
      <img src={post.image} alt={post.title} />
      <div className={styles.post_detail3}>
      <h2>{post.title}</h2>
      <p className={styles.createdBy}> por: {post.createdBy}</p>
      <p className={styles.postbody}> {post.body}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
            <span>#{tag}</span>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Leia mais
      </Link>
      </div>
    </div>
    </div>
  );
};

export default PostDetail;
