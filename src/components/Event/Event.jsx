import PropTypes from 'prop-types';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className="icon"></i>
        {location}
      </p>
      <p p className={css.info}>
        <i className="icon"></i>
        {speaker}
      </p>
      <p className={css.info}>
        <i className="icon"></i>
        {start}
      </p>
      <p className={css.info}>
        <i className="icon"></i>
        Duration
      </p>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
