import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import '../styles/index.css';

//import your own components
// import Home from "./component/home.jsx";

const SimpleCounter = (props) => {
    return (
        <div>
            <div className="p-4 fs-4">
                Simple Counter Excersise - 4Geeks - Agustin Trezza
            </div>
            <div className="counter-general align-custom bg-black" >
                <div className="contenedor-icono">
                    <i className="far fa-clock display-1 text-white me-4"/>
                </div>
                <div className="cuarto display-1 text-white contenedor-numero">{props.cuarto}</div>
                <div className="tercero display-1 text-white contenedor-numero">{props.tercero}</div>
                <div className="segundo display-1 text-white contenedor-numero">{props.segundo}</div>
                <div className="primero display-1 text-white contenedor-numero">{props.primero}</div>
            </div>
            <div className="buttons-container">
                <div>
                    <button className="btn btn-primary px-4 py-2 fs-5 me-3" onClick={reiniciarContador}>Reiniciar</button>     
                    <button className="btn btn-danger px-4 py-2 fs-5" onClick={detenerContador}>Detener</button>     
                </div>
                <div className="input-group">
                    <input type="text" className="form-control me-2" placeholder="Ingrese la cantidad de segundos" id="inputNumber" />
                    <button className="btn btn-warning p-3 fs-5" onClick={iniciarCuentaRegresiva}>Iniciar cuenta regresiva</button>
                </div>
            </div>
        </div>
        
    )
}

SimpleCounter.propTypes = {
    primero: PropTypes.number,
    segundo: PropTypes.number,
    tercero: PropTypes.number,
    cuarto: PropTypes.number,
}

let counter = 0;
let intervalo;

function iniciarContador() {
    intervalo = setInterval(() => {
        const primero = Math.floor(counter % 10);
        const segundo = Math.floor(counter / 10) % 10;
        const tercero = Math.floor(counter / 100) % 10;
        const cuarto = Math.floor(counter / 1000) % 10;
        ReactDOM.render(
            <SimpleCounter primero={primero} segundo={segundo} tercero={tercero} cuarto={cuarto} />,
            document.querySelector("#app")
        );
        counter++;
    }, 1000);
}

function reiniciarContador() {
    clearInterval(intervalo);
    counter = 0;
    iniciarContador();
}

function detenerContador() {
    clearInterval(intervalo);
    counter = 0;
}

function iniciarCuentaRegresiva() {
    const inputNumber = document.getElementById("inputNumber").value;
    let counter = parseInt(inputNumber);
    if (!isNaN(counter) && counter >= 0 && Number.isInteger(counter)) {
        clearInterval(intervalo);
        intervalo = setInterval(() => {
            if(counter <= 0) {
                alert("Llego a 0");
            }
            if (counter >= 0) {
                const primero = Math.floor(counter % 10);
                const segundo = Math.floor(counter / 10) % 10;
                const tercero = Math.floor(counter / 100) % 10;
                const cuarto = Math.floor(counter / 1000) % 10;
                ReactDOM.render(
                    <SimpleCounter primero={primero} segundo={segundo} tercero={tercero} cuarto={cuarto} />,
                    document.querySelector("#app")
                );
                
                counter--;
                
            } else {
                clearInterval(intervalo);
            }
        }, 1000);
    } else {
        alert("Por favor ingrese un número válido. Debe ser un numero entero y mayor que 0.");
    }
}

iniciarContador();