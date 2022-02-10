import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal";

const App = () => {
  const [Modal1, setModal1] = useState(false);
  const [Modal2, setModal2] = useState(false);
  const [Modal3, setModal3] = useState(false);
  const [Modal4, setModal4] = useState(false);

  return (
    <div>
      <ContenedorBotones>
        <Boton onClick={() => setModal1(!Modal1)}>Modal 1</Boton>
        <Boton onClick={() => setModal2(!Modal2)}>Modal 2</Boton>
        <Boton onClick={() => setModal3(!Modal3)}>Modal 3</Boton>
        <Boton onClick={() => setModal4(!Modal4)}>Modal 4</Boton>
      </ContenedorBotones>

      {/* modal #1 */}
      <Modal
        Modal1={Modal1}
        setModal1={setModal1}
        titulo="Hola!"
        mostrarHeader={true}
        mostrarOverlay={false}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h2>Ventana Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            dignissimos aperiam iure officiis suscipit veniam modi quae quasi?
            Deserunt fugit dolore ad vitae. Dolorem perspiciatis repellat ipsam
            voluptas amet voluptatum!
          </p>
          <Boton onClick={() => setModal1(!Modal1)}>Aceptar</Boton>
        </Contenido>
      </Modal>

      {/* modal #2 */}
      <Modal
        Modal2={Modal2}
        setModal2={setModal2}
        titulo="Hola, este es el modal 2!"
        mostrarHeader={false}
        mostrarOverlay={false}
        posicionModal={"end"}
        padding={"20px"}
      >
        <Contenido>
          <h2>Ventana Modal # 2</h2>
          <p>Esta es una ventana modal reusable!</p>
          <Boton onClick={() => setModal2(!Modal2)}>Aceptar</Boton>
        </Contenido>
      </Modal>
    </div>
  );
};

export default App;

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
