import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/info.module.scss';

export const Info = forwardRef(function Info(props, ref) {
  const { className, data, strapline, title } = props;

  return (
    <section
      className={classNames(styles.info, className ? styles[className] : '')}
      ref={ref}
    >
      <h2>{title}</h2>
      <div className={styles.infoStrapline}>{strapline}</div>
      <div className={styles.infoFancyBorder} />

      <ul>
        {data.map(({ imgPath, text, title }, index) => (
          <li key={index}>
            <div className={styles.imageWrapper}>
              <Image
                alt=''
                height={132}
                quality={100}
                src={imgPath}
                width={132}
              />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
});

Info.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  strapline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Info.defaultProps = {
  className: ''
};
