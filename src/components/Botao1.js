function Botao1({ setMensagem }) {
  
    return (
      <>
        <button onClick={YouAreHeisenberg}>Heisenberg</button>
      </>
    );

    function YouAreHeisenberg() {
        setMensagem("You're goddamn right");
      }
  }
  
  export default Botao1;
  