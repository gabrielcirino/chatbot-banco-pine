"use client";

import { AppShell, Text, rem, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavbarColored from "./components/NavbarColored";
import ChatSection from "./components/ChatSection";

export default function Page() {
  const [opened, { toggle }] = useDisclosure(true); // Navbar aparece por padrão

  return (
    <AppShell
      padding={0}
      styles={{
        main: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: rem(60), // Evita sobreposição do Header
          marginLeft: opened ? rem(300) : rem(0), // Ajuste condicional para o Navbar
          height: "calc(100vh - 60px - 40px)", // Altura considerando o Header e Footer
          backgroundColor: "#FFFFFF",
          overflow: "auto",
          paddingBottom: rem(56), // Espaço extra para evitar sobreposição do Footer
          transition: "all 0.3s ease", // Animação suave ao abrir e fechar
        },
      }}
    >
      {/* Header */}
      <AppShell.Header
        style={{
          backgroundColor: "#5C2627",
          display: "flex",
          alignItems: "center",
          padding: "16px",
          height: rem(60),
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Burger opened={opened} onClick={toggle} size="sm" color="#D1C9BA" />
        <img
          src="/logo-banco-pine.svg"
          alt="Logo Banco Pine"
          width={66}
          height={40}
          style={{ marginLeft: "1rem" }}
        />
        <div style={{ flex: 1 }} />
        <img
          src="/logo-polijunior.svg"
          alt="Logo Poli Júnior"
          width={66}
          height={40}
        />
      </AppShell.Header>

      {/* Navbar */}
      <AppShell.Navbar
        width={{ base: rem(300) }}
        style={{
          backgroundColor: "#361819",
          padding: "16px",
          transition: "all 0.3s ease",
          height: "calc(100vh - 60px)",
          overflowY: "auto",
          position: "fixed",
          top: rem(60),
          left: opened ? 0 : `-${rem(300)}`, // Navbar sai da tela quando fechado
          zIndex: 999,
        }}
      >
        <NavbarColored />
      </AppShell.Navbar>

      {/* Main Content */}
      <AppShell.Main
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#F7F7F7",
          flexGrow: 1,
        }}
      >
        <ChatSection />
      </AppShell.Main>

      {/* Footer */}
      <AppShell.Footer
        style={{
          backgroundColor: "#D1C9BA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          height: rem(40),
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Text style={{ color: "#361819", fontSize: rem(12) }}>
          Hackathon Poli Júnior & Banco Pine - Time Vinicius Moreira & Gabriel
          Cirino
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}