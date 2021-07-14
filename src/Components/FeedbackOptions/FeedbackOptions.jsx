import { Button } from './FeedbackOptions.styled';
import { Container} from '../Container/Container.styled';
// import PropTypes from 'prop-types';



export const FeedbackOptions = ({options, onSelect}) => {
	return (
		<Container>
			{options.map(option => 
				<Button onClick={() => onSelect(option)}>
					{option}
				</Button>
			)}
		</Container>
	)
}



export default FeedbackOptions;