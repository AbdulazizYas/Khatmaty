import { useEffect, useState } from "react";
import KhatmahCard from "../components/tasmeat/KhatmahCard";
import ModalTasmee from "../components/tasmeat/ModalTasmee";
import { useTasmeat } from "../contexts/Tasmeat";

const Tasmeat = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  //const [cardsExist, setCardsExist] = useState(false);

  const { khatmat } = useTasmeat();

  // useEffect(() => {
  //   setTimeout((_) => console.log("bruh"), 1500);
  //   if (khatmat.length !== 0) {
  //     setCardsExist(true);
  //   }
  //   setTimeout((_) => console.log(cardsExist), 1500);
  // }, [cardsExist]);

  // const [isSSR, setIsSSR] = useState(true);

  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);

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
      <h2>ختماتي:</h2>
      <hr />
      <div className="khatmat">
        {khatmat.length === 0 && (
          <p className="nothing">لا توجد ختمات بعد ..</p>
        )}

        {khatmat.length !== 0 &&
          khatmat.map((khatmah) => (
            <KhatmahCard key={khatmah.id} khatmah={khatmah} />
          ))}
      </div>
    </div>
  );
};

export default Tasmeat;
