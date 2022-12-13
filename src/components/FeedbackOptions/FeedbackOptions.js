import { nanoid } from 'nanoid';
import s from './FeedbackOtions.module.css';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, clickHandler }) {
  return (
    <div className={s.box}>
      {options.map(option => (
        <button
          className={s.btn}
          onClick={() => clickHandler(option)}
          key={nanoid()}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  optons: PropTypes.array,
  clickHandler: PropTypes.func.isRequired,
};
