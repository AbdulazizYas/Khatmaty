import { formatTime } from "../../utils";

const KhatmahCard = ({ khatmah }) => {
  return (
    <div className="khatmah">
      <header className="title">{khatmah.description}</header>
      <div>
        <h6>اخطاء بـ..</h6>

        <div className="mistakes">
          <span className="vowels">
            <p>الحركات</p> {khatmah.vowels}
          </span>
          <span className="words">
            <p>الكلمات</p> {khatmah.words}
          </span>
          <span className="jumps">
            <p>نط آيات</p> {khatmah.jumps}
          </span>
          <span className="uncomplete">
            <p>عدم معرفة التكملة</p> {khatmah.uncomplete}
          </span>
        </div>
      </div>

      <div className="time">
        مدة الختمة :{" "}
        <span>
          {formatTime(Math.floor(khatmah.time / 3600))}:
          {formatTime(Math.floor((khatmah.time / 60) % 60))}:
          {formatTime(Math.floor(khatmah.time % 60))}
        </span>
      </div>
    </div>
  );
};

export default KhatmahCard;
