import React, { useState } from "react";
// import { render } from "@testing-library/react"; 
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import  Statistics  from "../Statistics/Statistics";
import  Section  from "../Container/Container";
import  {Notification}  from "../Notification/Notification";
import  {AppContainer}  from "./App.styled";
// import { GrInstagram } from "react-icons/gr";

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        return setGood(state => state + 1);

      case 'neutral':
        return setNeutral(state => state + 1);

      case 'bad':
        return setBad(state => state + 1);

      default:
        return;
    }
  };

  // useEffect(() => {
  //   setGood(prevState=>prevState + 1)
  //   return () => {
      
  //   }
  // }, [good]);
  
  
  // useEffect(() => {
  //   setNeutral(prevState=>prevState + 1)
  //   return () => {
      
  //   }
  // }, [neutral]);
  
  
  //   useEffect(() => {
  //   setBad(prevState=>prevState + 1)
  //   return () => {
      
  //   }
  // }, [bad]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentag = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };

  return (
    <AppContainer>
      {/* <GrInstagram></GrInstagram> */}
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onSelect={leaveFeedback} />
      </Section>
    
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentag()}
          />) : (
          <Notification message="No feedback given" />)
        }
      </Section>
    </AppContainer>
  );
}