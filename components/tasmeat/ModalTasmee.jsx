import { Cross } from "../Utils";
import { useEffect, useRef, useState } from "react";
import { useTasmeat } from "../../contexts/Tasmeat";
import StopWatch from "./StopWatch";
import MistakesCounter from "./MistakesCounter";

const ModalTasmee = ({ isShown, setIsShown }) => {
  const jumpRef = useRef();
  const vowelsRef = useRef();
  const wordsRef = useRef();
  const uncompleteRef = useRef();

  const timeRef = useRef();

  const allRefs = useRef({ jumpRef, vowelsRef, wordsRef, uncompleteRef });

  const { khatmat, addKhatmah } = useTasmeat();

  const handleSubmit = (e) => {
    e.preventDefault();

    addKhatmah({
      time: timeRef.current,
      jumps: jumpRef.current.value,
      words: wordsRef.current.value,
      vowels: vowelsRef.current.value,
      uncomplete: uncompleteRef.current.value,
    });

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
                <StopWatch timeRef={timeRef} />
                <MistakesCounter ref={allRefs} />
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
                >
                  إضافة
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
