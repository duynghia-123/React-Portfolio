import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Duy Nghia </span>
        from <span className={s.purple}> Da Nang, Vietnam.</span>
        <br />
        Skilled Front End Developer.
        <br />
        Software Engineer from
        <br />
        Vietnam - Korea University of Information and Communication
        Technology
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Photography
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening To Music
        </li>
      </ul>

      <p
        style={{
          color: '#35734c',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "The only constant in the technology industry is change."{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
