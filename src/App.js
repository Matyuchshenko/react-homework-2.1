import { Component } from "react";

import Section from "./components/Section";
import { FEEDBACK_OPTIONS } from "./data/constance";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bed: 0,
  };

  handelFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bed } = this.state;
    return good + neutral + bed;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bed } = this.state;
    const total = this.countTotalFeedback();
    const PositivePercentage = this.countPositivePercentage();
    console.log(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLiveFeedback={this.handelFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bed={bed}
            total={total}
            PositivePercentage={PositivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
