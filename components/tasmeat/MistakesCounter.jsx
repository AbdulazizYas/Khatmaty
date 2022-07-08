import { forwardRef, useRef } from "react";
import Counter from "./Counter";

const MistakesCounter = forwardRef((props, ref) => {
  const { jumpRef, vowelsRef, wordsRef, uncompleteRef } = ref.current;

  return (
    <div className="mistakes-counter">
      <h6 className="title">عداد الأخطاء:</h6>
      <div className="counters">
        <div>
          <label htmlFor="jump">قفزة بالآيات</label>
          <Counter id="jump" ref={jumpRef} />
        </div>

        <div>
          <label htmlFor="vowels">غلط بالحركات</label>
          <Counter id="vowels" ref={vowelsRef} />
        </div>

        <div>
          <label htmlFor="words">غلط بالكلمات</label>
          <Counter id="words" ref={wordsRef} />
        </div>

        <div>
          <label htmlFor="uncomplete">عدم معرفة التكملة</label>
          <Counter id="uncomplete" ref={uncompleteRef} />
        </div>
      </div>
    </div>
  );
});

MistakesCounter.displayName = "MistakesCounter";

export default MistakesCounter;
