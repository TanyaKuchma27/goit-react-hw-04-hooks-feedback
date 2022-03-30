import {Message} from './Notification.styled';
import propTypes from 'prop-types';

const Notification = ({message}) => {
  return <Message>{ message}</Message>;
};
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;