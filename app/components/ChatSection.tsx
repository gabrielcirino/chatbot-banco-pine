"use client";

import { Box, Text, TextInput, Button, Avatar, Group } from "@mantine/core";
import { useState, useRef, useEffect } from "react";

interface Message {
  from: "assistant" | "user";
  text: string;
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "assistant",
      text: "Olá, sou o assistente do Banco Pine, como posso ajudar você hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
      setInput("");

      // Verificar se a pergunta é sobre a taxa de cambio do dolar hoje
      if (/taxa de cambio do dolar hoje/i.test(userMessage)) {
        // Simular obtenção da taxa de cambio
        const today = new Date();
        const formattedDate = today.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const exchangeRate = 5.25; // Exemplo de taxa de cambio

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "assistant",
              text: `A taxa de câmbio do dólar hoje (${formattedDate}) é de R$ ${exchangeRate.toFixed(2)}.`,
            },
          ]);
        }, 1000);
      } else {
        // Resposta padrão
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "assistant", text: "Interessante, conte-me mais." },
          ]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Área de mensagens */}
      <Box
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        {messages.map((msg, idx) => {
          const isUser = msg.from === "user";
          return (
            <Group
              key={idx}
              align="flex-start"
              style={{
                justifyContent: isUser ? "flex-end" : "flex-start",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {!isUser && (
                <Avatar
                  radius="xl"
                  style={{
                    backgroundColor: "#5C2627",
                    color: "#D1C9BA",
                    fontWeight: "bold",
                  }}
                >
                  BP
                </Avatar>
              )}
              <Text
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  maxWidth: "60%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </Text>
              {isUser && (
                <Avatar
                  radius="xl"
                  style={{
                    backgroundColor: "#361819",
                    color: "#D1C9BA",
                    fontWeight: "bold",
                  }}
                >
                  U
                </Avatar>
              )}
            </Group>
          );
        })}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input fixo no rodapé do chat */}
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          gap: "0.5rem",
          padding: "1rem",
          borderTop: "1px solid #ccc",
          backgroundColor: "#ffffff",
        }}
      >
        <TextInput
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={{ flex: 1 }}
        />
        <Button
          onClick={handleSend}
          style={{ backgroundColor: "#5C2627", color: "#D1C9BA" }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}