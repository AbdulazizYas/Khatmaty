import { useState } from "react";
import ModalTasmee from "../components/tasmeat/ModalTasmee";
import { TasmeatProvider } from "../contexts/Tasmeat";

const Tasmeat = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const handleShowModal = () => {
    setModalIsShown(true);
  };

  return (
    <TasmeatProvider>
      <div>
        <div>
          <button className="primary" onClick={() => handleShowModal()}>
            أضف ختمة +
          </button>

          <ModalTasmee isShown={modalIsShown} setIsShown={setModalIsShown} />
        </div>
        <div className="khatmat">
          <h2>ختماتي:</h2>
          <hr />
        </div>
      </div>
    </TasmeatProvider>
  );
};

export default Tasmeat;
