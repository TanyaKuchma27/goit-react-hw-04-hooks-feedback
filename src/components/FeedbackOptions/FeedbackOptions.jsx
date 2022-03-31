import { List, Item, Button } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <List>
      {options.map((option, index) => {
        return (
          <Item key={option}>
            <Button              
              type="button"
              onClick={() => onLeaveFeedback[index](option)}            
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.arrayOf(propTypes.func).isRequired,
};

export default FeedbackOptions;

// const FeedbackOptions = ({options, onLeaveFeedback}) => {
//   return (
//     <List>
//       {options.map(option => {
//         return (
//           <Item key={option}>
//             <Button              
//               type="button"
//               onClick={() => onLeaveFeedback(option)}            
//             >
//               {option}
//             </Button>
//           </Item>
//         );
//       })}
//     </List>
//   );
// };
// FeedbackOptions.propTypes = {
//   options: propTypes.arrayOf(propTypes.string).isRequired,
//   onLeaveFeedback: propTypes.func.isRequired,
// };

// export default FeedbackOptions;