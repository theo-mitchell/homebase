import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <main className={styles.main}>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
};

export default Contact;
