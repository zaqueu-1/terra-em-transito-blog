import styles from "./Post.module.css";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
   <>
   <div className={styles.post_container}>
      {post && (
        <>
          <img src={post.image} alt={post.title} />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
    <div className={styles.return}>
    <Link to="/">
      Voltar
    </Link>
    </div>
    </>
  );
};

export default Post;
