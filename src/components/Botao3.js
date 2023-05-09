function Botao3({ setMensagem }) {
    function NoHeisenberg() {
      setMensagem('No!');
    }
  
    return (
      <>
        <button onClick={NoHeisenberg}>Gus</button>
      </>
    );
  }
  
  export default Botao3;
  