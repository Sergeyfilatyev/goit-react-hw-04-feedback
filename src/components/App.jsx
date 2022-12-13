import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  return (
    <>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions
            options={Object.keys(options)}
            clickHandler={addFeedback}
          />
        }
      />
      <Section
        title={'Statistics'}
        children={
          countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     return this.countTotalFeedback()
//       ? Math.round((good / this.countTotalFeedback()) * 100)
//       : 0;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section
//           title={'Please leave feedback'}
//           children={
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               clickHandler={this.addFeedback}
//             />
//           }
//         />
//         <Section
//           title={'Statistics'}
//           children={
//             this.countTotalFeedback() ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             ) : (
//               <Notification message={'There is no feedback'} />
//             )
//           }
//         />
//       </>
//     );
//   }
// }
// export default App;
