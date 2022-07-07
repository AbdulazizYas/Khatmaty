import { useState } from "react";
import ModalTasmee from "../components/tasmeat/ModalTasmee";

const Tasmeat = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const handleShowModal = () => {
    setModalIsShown(true);
  };

  return (
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
  );
};

export default Tasmeat;
