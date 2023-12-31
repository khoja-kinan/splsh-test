import Head from "next/head";
import Ranking from "../../components/ranking";
import PlayerInputs from "../../components/playerInput";
import GameBoardContainer from "../../components/gameBoard/GameBoardContainer";
import Chat from "../../components/chat";
import classes from "../styles/Home.module.css";
import { Container, Grid, Stack } from "@mui/material";

const playerName = "John Doe";
const points = 100;
const timer = "00:00";

export default function Home() {
  const handleSendMessage = (message: string) => {
    // Your implementation to handle sending the message
    console.log(`Sending message: ${message}`);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main}`}>
        <Container maxWidth="lg">
          <Stack direction={"row"} sx={{ height: "80vh" }} spacing={2}>
            <PlayerInputs />
            <GameBoardContainer
              playerName={playerName}
              points={points}
              timer={timer}
            />
          </Stack>
          <Stack direction={"row"} marginTop={2} spacing={1}>
            <Ranking />
            <Chat onSendMessage={handleSendMessage} />
          </Stack>
        </Container>
      </main>
    </>
  );
}
