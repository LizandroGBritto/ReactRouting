import { useParams } from 'react-router-dom';
import '../App.css';

const WordOrNumber = () => {
    const { input, textColor = 'rgba(255, 255, 255, 0.87)', bgColor = '#242424' } = useParams();

    const isANum = !isNaN(+input);

    const styledPage = {
        color: textColor,
        backgroundColor: bgColor,
    };

    return (
        <div style={styledPage}>
            {isANum ? `The number is: ${input}` : `The word is: ${input}`}
        </div>
    );
};

export default WordOrNumber;