import Head from "next/head";
import styles from "../styles/Home.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <main className={styles.main}>
        <div>
          <h1 color="yellow">BLOG PAGE</h1>
        </div>
      </main>
    </div>
  );
};

export default Blog;
