import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    if (option === 'good') {
      setGood(state => state + 1);
    } else if (option === 'neutral') {
      setNeutral(state => state + 1);
    } else if (option === 'bad') {
      setBad(state => state + 1);
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      const positiveFeedbackPercentage = good / countTotalFeedback() * 100;
      return positiveFeedbackPercentage;
    }
    return 0;
  }
    
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = Math.round(countPositiveFeedbackPercentage());
    
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}            
        />
      </Section>

      <Section title="Statistics">
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> : <Notification
            message="There is no feedback"
        />}
      </Section>
      </div>
    );  
}

// import React, { Component } from 'react';
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0    
//   };

//   onLeaveFeedback = (option) => {
//     this.setState(prevState => ({[option]: prevState[option] + 1}))
//   }

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
  
//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback() > 0) {
//       const positiveFeedbackPercentage = this.state.good / this.countTotalFeedback() * 100;
//       return positiveFeedbackPercentage;
//     }
//     return 0;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = Math.round(this.countPositiveFeedbackPercentage());
//     const options = Object.keys(this.state);   

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total ?
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             /> : <Notification
//               message="There is no feedback"
//             />}
//         </Section>
//       </div>
//     );
//   }
// }