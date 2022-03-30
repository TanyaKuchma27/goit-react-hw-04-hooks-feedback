import {Section, Text} from './Statistics.styled';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <Section>  
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total: {total}</Text>
        <Text>Positive feedback: {positivePercentage}%</Text>
    </Section>
);
    
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;