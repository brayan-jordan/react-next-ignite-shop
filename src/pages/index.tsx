import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    backgroundColor: "red",
  },
});

export default function Home() {
  return (
    <>
      <Button>
        <span>Teste</span>
        Enviar
      </Button>
      <span>
        agora foi
      </span>
    </>
  );
}