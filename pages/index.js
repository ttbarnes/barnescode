import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Info } from '../components/Info';
import ContactPanel from '../components/ContactPanel';
import { MISSION, PROCESS, CARD_TEXT } from '../constants';
import styles from '../styles/home.module.scss';

const Home = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.intro}>
        <div className='container'>
          <h1>Creative software engineering</h1>
          <p>We build products and services that are easy to use and scale</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            animate={{
              position: 'relative',
              top: ['10%', '11%', '10%', '11%', '10%'],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            viewport={{ once: true }}
          >
            <button onClick={handleClick}>
              <Image
                alt='Scroll arrow'
                height={45}
                quality={100}
                src='/scroll-arrow.svg'
                width={95}
              />
            </button>
          </motion.div>
        </div>
      </div>

      <Info
        data={MISSION}
        strapline='“Iterative, scalable software engineering”'
        ref={ref}
        title='Our mission'
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ once: true }}
      >
        <Card
          alt='User research'
          icon='/user-research.svg'
          largeImage='/user-research.jpg'
          title={
            <>
              User research &<br />
              design
            </>
          }
        >
          {CARD_TEXT.UX_DESIGN}
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ once: true }}
      >
        <Card
          alt='Engineering'
          className='cardMiddle'
          icon='/engineering.svg'
          largeImage='/engineering.jpg'
          title='Engineering'
        >
          {CARD_TEXT.ENGINEERING}
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ once: true }}
      >
        <Card
          alt='Re-platforming, modernization'
          className='cardLast'
          icon='/rocket.svg'
          largeImage='/modernization.jpg'
          title={
            <>
              Re-platforming,
              <br />
              modernization
            </>
          }
          customIconSize={{
            width: 75,
            height: 75
          }}
        >
          {CARD_TEXT.REPLATFORMING}
        </Card>
      </motion.div>

      <Info
        className='infoLast'
        data={PROCESS}
        strapline='“Iterative, scalable software engineering”'
        title='Our processes'
      />

      <ContactPanel />
    </>
  );
}

export default Home;
