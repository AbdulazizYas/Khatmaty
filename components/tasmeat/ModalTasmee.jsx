import { Cross } from "../utils";
import ModalBody from "./ModalBody";

const ModalTasmee = ({ isShown, setIsShown }) => {
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
            <div className="body">
              <ModalBody />
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
              <button className="primary" style={{ width: "80%" }}>
                إضافة
              </button>
            </div>
          </div>
        </div>
      )}

      {!isShown && <div></div>}
    </>
  );
};

export default ModalTasmee;
