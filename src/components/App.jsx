import { useState } from 'react';
import s from './Feedback/Feedback.module.css';
import Statistics from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = 0;
  let positive = 0;

  const onLeaveFeedbackIncrease = (option) => {

    switch (option) {
      case 'good':
        setGood(prevState => prevState +1); 
        break;
      
       case 'neutral':
        setNeutral(prevState => prevState +1); 
        break;
      
       case 'bad':
        setBad(prevState => prevState +1); 
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    positive = Math.floor(good / countTotalFeedback() * 100); 
    return positive;
  }

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.Container}>
       <Section title="Please leave feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedbackIncrease}
        /> 
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback() ? 
            <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={total !== 0 && positivePercentage}
            /> : <Notification message="There is no feedback!"/>}
                
          </Section>
      </div>
  )
}
