import { styled } from '@linaria/react';
import { useState, useEffect } from 'react';
import { AppButton } from '../AppButton';

export const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('12/25/2024').getTime());
  const [color, setColor] = useState('red')
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setState({ hours: hours, minutes, seconds });
      setColor(seconds%3 ? (seconds%2 ?'red':'green') : 'white')
    }
  };

  return (
    <div>
      <Wrapper color={color}>
        <TimeSection>
          <div className='time'>{state.hours || '00'}</div>
          <small className='time-text'>Hours</small>
        </TimeSection>
        <TimeSection>
          <div className='time'>:</div>
        </TimeSection>
        <TimeSection>
          <div className='time'>{state.minutes || '00'}</div>
          <small className='time-text'>Minutes</small>
        </TimeSection>
        <TimeSection>
          <div className='time'>:</div>
        </TimeSection>
        <TimeSection>
          <div className='time'>{state.seconds || '00'}</div>
          <small className='time-text'>Seconds</small>
        </TimeSection>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.span<{ color: string }>`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 0.5rem;
  color: ${({color}) => color};
`;
const TimeSection = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
