import s from './Statistics.module.css';
import PropTypes from 'prop-types';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>good: {good}</li>
      <li className={s.item}>neutral: {neutral}</li>
      <li className={s.item}>bad: {bad}</li>
      <li className={s.item}>total: {total}</li>
      <li className={s.item}>positive percentage: {positivePercentage} %</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
