import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [activeLight, setActiveLight] = useState(null);

	const LightClick = (light) => {
	  setActiveLight(light);
	};
  
	const getLightClass = (light) => {
	  return `circulo ${light} ${activeLight === light ? "activo" : ""}`;
	};

	const alternate = () => {
		if (activeLight === "rojo") {
			setActiveLight("amarillo");
		  } else if (activeLight === "amarillo") {
			setActiveLight("verde");
		  } else {
			setActiveLight("rojo");
		  }
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="cuerpo-semaforo">
				<div className="poste"></div>
				<div className="semaforo">
					<div className={getLightClass("rojo")} onClick={() => LightClick("rojo")}></div>
					<div className={getLightClass("amarillo")} onClick={() => LightClick("amarillo")}></div>
					<div className={getLightClass("verde")} onClick={() => LightClick("verde")}></div>
				</div>
			</div>
			<button type="button" className="btn btn-success mt-4" onClick={alternate}>Alternar</button>
		</div>
	);
  };

export default Semaforo;
