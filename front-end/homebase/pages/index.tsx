import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useTheme, Text } from "@nextui-org/react";
import { Typography } from "@mui/material";
import GradientText from "../components/utils/gradientText";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Theo Mitchell</title>
        <meta name="description" content="Theo Mitchell" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <Typography fontWeight={"bold"} variant="h1" component="h1">
          Hi, my name is Theo.
        </Typography>
        <GradientText>
          <Typography fontWeight={"bold"} variant="h1" component="h1">
            Nice to vitrualy meet you.
          </Typography>
        </GradientText>
      </main>
    </div>
  );
}
