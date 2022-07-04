import { useRef } from "react";

const MistakesCounter = () => {
  const jumpRef = useRef();
  const vowelsRef = useRef();
  const wordsRef = useRef();
  const uncompleteRef = useRef();

  return (
    <div className="mistakes-counter">
      <h6 className="title">عداد الأخطاء:</h6>
      <div className="counters">
        <div>
          <label htmlFor="jump">قفزة بالآيات</label>
          <input type="number" id="jump" name="jump" min={0} ref={jumpRef} />
        </div>

        <div>
          <label htmlFor="vowels">غلط بالحركات</label>
          <input
            type="number"
            name="vowels"
            id="vowels"
            min={0}
            ref={vowelsRef}
          />
        </div>

        <div>
          <label htmlFor="words">غلط بالكلمات</label>
          <input type="number" name="words" id="words" min={0} ref={wordsRef} />
        </div>

        <div>
          <label htmlFor="uncomplete">عدم معرفة التكملة</label>
          <input
            type="number"
            name="uncomplete"
            id="uncomplete"
            min={0}
            ref={uncompleteRef}
          />
        </div>
      </div>
    </div>
  );
};

export default MistakesCounter;
