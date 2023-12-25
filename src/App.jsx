import BaseColaboradores from "./Colaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import FormAlert from "./components/Alert";
import Buscador from "./components/Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  // estados que almancenan valores (base de datos, errores, valores de inputs y filtrado)
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [errores, setErrores] = useState(false);
  const [exito, setExito] = useState("");
  const [formValue, setFormValue] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const nuevaBaseDatos = [...listaColaboradores, formValue];
  const [filtro,setFiltro] = useState("")
  return (
    <div className="container">
      <div className="listado__container">
        <h1>Lista de colaboradores</h1>
        <Buscador
          listaColaboradores={listaColaboradores}
          setFiltro={setFiltro}
        ></Buscador>
        <Listado
          listaColaboradores={listaColaboradores}
          filtro={filtro}
        ></Listado>
      </div>
      <div>
        <Formulario
          setListaColaboradores={setListaColaboradores}
          setExito={setExito}
          setErrores={setErrores}
          nuevaBaseDatos={nuevaBaseDatos}
          formValue={formValue}
          setFormValue={setFormValue}
        ></Formulario>
        {errores ? (
          <FormAlert
            variant="danger"
            errores={errores}
            setErrores={setErrores}
          ></FormAlert>
        ) : null}
        {exito ? ( <FormAlert variant="success" exito={exito} setExito={setExito}></FormAlert>) : null}
      </div>
    </div>
  );
}

export default App;
