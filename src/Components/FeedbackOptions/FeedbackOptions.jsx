import { Button } from './FeedbackOptions.styled';
import { Container} from '../Container/Container.styled';
import PropTypes from 'prop-types';



export const FeedbackOptions = ({options, onSelect}) => {
	return (
		<Container>
			{options.map(option => 
				<Button
					type="button"
					key={option}
					name={option}
					onClick={() => onSelect(option)}>
					{option}
				</Button>
			)}
		</Container>
	)
}


FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;