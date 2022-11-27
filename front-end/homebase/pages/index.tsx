import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import GradientText from "../components/utils/gradientText";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Theo Mitchell</title>
      </Head>
      <main className={styles.main}>
        <Typography fontWeight={"bold"} variant="h1" component="h1">
          Hi, my name is Theo.
        </Typography>
        <GradientText>
          <Typography fontWeight={"bold"} variant="h1" component="h1">
            Nice to vitrually meet you.
          </Typography>
        </GradientText>
      </main>
    </div>
  );
}
