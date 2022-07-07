import { Cross } from "../Utils";
import { useEffect, useRef, useState } from "react";
import { useTasmeat } from "../../contexts/Tasmeat";
import StopWatch from "./StopWatch";
import MistakesCounter from "./MistakesCounter";

const ModalTasmee = ({ isShown, setIsShown }) => {
  const timeRef = useRef();

  const jumpRef = useRef();
  const vowelsRef = useRef();
  const wordsRef = useRef();
  const uncompleteRef = useRef();

  const mistakesRefs = useRef({ jumpRef, vowelsRef, wordsRef, uncompleteRef });

  const descRef = useRef();

  const { khatmat, addKhatmah } = useTasmeat();

  //useEffect((_) => console.log(khatmat));

  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    addKhatmah({
      time: timeRef.current,
      jumps: jumpRef.current.value,
      words: wordsRef.current.value,
      vowels: vowelsRef.current.value,
      uncomplete: uncompleteRef.current.value,
      description: descRef.current.value,
    });

    setDisabled(true);
    setIsShown(false);
  };
  return (
    <>
      {isShown && (
        <div className="modal">
          <div className="modalWindow">
            <div className="header">
              <span className="title">اضافة ختمة</span>
              <button
                style={{
                  background: "none",
                  boxShadow: "none",
                  position: "relative",
                  left: ".5rem",
                }}
                role="close"
                onClick={() => setIsShown(false)}
              >
                <Cross />
              </button>
            </div>
            <hr
              style={{
                margin: 0,
                opacity: 0.25,
                borderRadius: "50px",
              }}
            />
            <form onSubmit={handleSubmit}>
              <div className="body">
                <StopWatch timeRef={timeRef} setDisabled={setDisabled} />
                <MistakesCounter ref={mistakesRefs} />
                <input
                  type="text"
                  className="description"
                  placeholder="وصف قصير للختمة.."
                  ref={descRef}
                />
              </div>

              <hr
                style={{
                  margin: 0,
                  marginBottom: "1rem",
                  opacity: 0.25,
                  borderRadius: "50px",
                }}
              />

              <div className="footer">
                <button
                  type="submit"
                  className="primary"
                  style={{ width: "80%" }}
                  disabled={disabled}
                >
                  {disabled ? "ابدأ لتفعيل الاضافة.." : "إضافة"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!isShown && <div></div>}
    </>
  );
};

export default ModalTasmee;
