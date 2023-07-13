import React, { useContext, useEffect, useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import chatIcom from "../../public/icons/chatIcon.png";
import { PlayerContext } from "../../context/playerContext";
interface ChatProps {
  onSendMessage: (message: string) => void;
}

interface Message {
  name: string;
  message: string;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
  const [inputMessage, setMessage] = useState("");
  const { otherPlayers, username } = useContext(PlayerContext);
  console.log(otherPlayers);

  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

  useEffect(() => {
    let currentIndex = 0;

    const showMessage = () => {
      if (currentIndex < otherPlayers.length) {
        setCurrentMessages((prevMessages) => [
          ...prevMessages,
          {
            name: otherPlayers[currentIndex]?.name,
            message: otherPlayers[currentIndex]?.messages,
          },
        ]);
        currentIndex++;
        setTimeout(showMessage, 500);
      }
    };

    showMessage();
  }, [otherPlayers]);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      onSendMessage(inputMessage);
      setCurrentMessages((prevMessages) => [
        ...prevMessages,
        {
          name: username,
          message: inputMessage,
        },
      ]);
      setMessage("");
    }
  };

  return (
    <Box sx={{ flex: 0.5, height: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        spacing={2}
        marginBottom={1}
      >
        <Image src={chatIcom} alt="Chat Icon" width={25} height={25} />
        <Typography variant="body1" color={"#fff"}>
          Chat
        </Typography>
      </Stack>
      <Box
        sx={{
          overflow: "auto",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
          backgroundColor: "#191F27",
          padding: "8px",
          minHeight: "150px",
          maxHeight: "150px",
        }}
      >
        {currentMessages.map((item, index) => (
          <Typography key={index} variant="body1" margin={"1rem 0"}>
            {item.name ? (
              <span style={{ color: "#9F3462", fontWeight: "700" }}>
                {`${item.name}:  `}
              </span>
            ) : null}
            {item.message ? (
              <span
                style={{
                  backgroundColor: "#5E657B",
                  borderRadius: "10px",
                  padding: "0.3rem",
                  fontWeight: "700",
                }}
              >
                {item.message}
              </span>
            ) : null}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#313942",
          padding: "0.5rem",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        <TextField
          value={inputMessage}
          onChange={handleMessageChange}
          sx={{
            marginRight: "8px",
            flex: 0.85,
            backgroundColor: "#191F27",
            borderRadius: "8px",
            "& .MuiInputBase-input": {
              padding: "0.5rem",
            },
          }}
          inputProps={{ style: { color: "#fff" } }}
        />
        <Button
          sx={{
            /*  "&.MuiButtonBase-root ": {
              padding: "14.5px 14px",
            }, */
            flex: 0.15,
            backgroundImage: "linear-gradient(to right, #E53C7A, #FD5D47)",
            color: "#fff",
            /*  "&:hover": {
              backgroundImage: "linear-gradient(to right, #E53C7A, #FD5D47)",
            }, */
          }}
          variant="contained"
          onClick={handleSendMessage}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
