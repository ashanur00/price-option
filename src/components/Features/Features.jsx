import PropTypes from 'prop-types';
import { FcOk } from "react-icons/fc";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex'><FcOk className='mr-2 mt-1' /> {feature}</p>
        </div>
    );
};
Features.propTypes ={
    feature:PropTypes.string
}
export default Features;