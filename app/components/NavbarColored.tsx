"use client";

import { useState } from "react";
import {
  IconHome2,
  IconChartBar,
  IconCoin,
  IconReceipt2,
  IconUsers,
  IconLogout,
  IconSwitchHorizontal,
  TablerIcon
} from "@tabler/icons-react";
import { Code, Group, Modal, Text } from "@mantine/core";

interface NavItem {
  link: string;
  label: string;
  icon: TablerIcon;
  modalContent?: JSX.Element;
}

const data: NavItem[] = [
  { link: "#", label: "Home", icon: IconHome2 },
  {
    link: "#",
    label: "Investimentos",
    icon: IconCoin,
    modalContent: (
      <Text size="sm">
        O Banco Pine oferece soluções de investimento personalizadas, incluindo fundos, renda fixa, 
        renda variável e produtos estruturados. Conte com nossa equipe especializada para encontrar a 
        melhor estratégia financeira.
      </Text>
    ),
  },
  {
    link: "#",
    label: "Mercado de Capitais",
    icon: IconChartBar,
    modalContent: (
      <Text size="sm">
        Atuamos no mercado de capitais, auxiliando empresas em emissões, ofertas públicas, 
        securitizações e estruturação de dívidas, contribuindo para o crescimento sustentável 
        dos nossos clientes.
      </Text>
    ),
  },
  {
    link: "#",
    label: "Pagamentos",
    icon: IconReceipt2,
    modalContent: (
      <Text size="sm">
        Oferecemos soluções de pagamentos corporativos e gestão de caixa, 
        permitindo maior eficiência e segurança nas transações financeiras da sua empresa.
      </Text>
    ),
  },
  {
    link: "#",
    label: "Sobre Nós",
    icon: IconUsers,
    modalContent: (
      <Text size="sm">
        O Banco Pine é um banco de investimentos com foco no atendimento corporativo, 
        entregando soluções financeiras sob medida, suporte especializado e agilidade 
        para atender às necessidades dos nossos clientes.
      </Text>
    ),
  },
];

export default function NavbarColored() {
  const [active, setActive] = useState("Home");
  const [openedModalContent, setOpenedModalContent] = useState<JSX.Element | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  const handleLinkClick = (item: NavItem) => {
    setActive(item.label);
    if (item.modalContent) {
      setOpenedModalContent(item.modalContent);
      setModalOpened(true);
    }
  };

  const links = data.map((item) => (
    <a
      key={item.label}
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        handleLinkClick(item);
      }}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        color: "#D1C9BA",
        textDecoration: "none",
        borderRadius: "4px",
        marginBottom: "0.5rem",
        backgroundColor: item.label === active ? "#5C2627" : "transparent",
      }}
    >
      <item.icon style={{ marginRight: "0.5rem" }} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {/* Modal para conteúdo adicional ao clicar nos links */}
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title={active}>
        {openedModalContent}
      </Modal>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Group style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
          <Code fw={700} style={{ color: "#D1C9BA" }}>v1.0.0</Code>
        </Group>
        <div>
          {links}
        </div>
      </div>

      <div>
        <a href="#" onClick={(event) => event.preventDefault()} style={{
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 1rem",
          color: "#D1C9BA",
          textDecoration: "none",
          borderRadius: "4px",
          marginBottom: "0.5rem",
        }}>
          <IconSwitchHorizontal style={{ marginRight: "0.5rem" }} stroke={1.5} />
          <span>Trocar conta</span>
        </a>

        <a href="#" onClick={(event) => event.preventDefault()} style={{
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 1rem",
          color: "#D1C9BA",
          textDecoration: "none",
          borderRadius: "4px",
        }}>
          <IconLogout style={{ marginRight: "0.5rem" }} stroke={1.5} />
          <span>Sair</span>
        </a>
      </div>
    </nav>
  );
}