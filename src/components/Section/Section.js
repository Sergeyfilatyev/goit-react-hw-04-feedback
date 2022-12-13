import s from './Section.module.css';
import PropTypes from 'prop-types';
export function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
