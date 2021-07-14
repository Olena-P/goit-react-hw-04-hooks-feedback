import React, { Component } from "react";
// import { render } from "@testing-library/react"; 
import {FeedbackOptions} from "Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "Components/Statistics/Statistics";
import { Section } from "Components/Container/Container";
import { Notification } from "Components/Notification/Notification";
import { AppContainer } from "./App.styled";
// import { GrInstagram } from "react-icons/gr";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (option) => {
    this.setState((prevState) =>
      ({ [option]: prevState[option] + 1 }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

   countPositiveFeedbackPercentag = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <AppContainer>
        {/* <GrInstagram></GrInstagram> */}
        <Section title="Please leave feedback">
         <FeedbackOptions options={["good", "neutral", "bad"]} onSelect={this.leaveFeedback} />
        </Section>
      
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentag()}
            />) : (
            <Notification message="No feedback given" />)
          }
        </Section>
      </AppContainer>
    );
      
  }
}

export default App;
