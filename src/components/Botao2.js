function Botao2({ setMensagem }) {
    function NoHeisenberg() {
      setMensagem('No!');
    }
  
    return (
      <>
        <button onClick={NoHeisenberg}>Jesse</button>
      </>
    );
  }
  
  export default Botao2;
  