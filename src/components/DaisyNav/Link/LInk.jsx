import PropTypes from 'prop-types';

const LInk = ({route}) => {
    return (
        <li className="mr-10 hover:bg-slate-200 p-2 rounded-xl" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
LInk.propTypes = {
    route: PropTypes.object
} 

export default LInk;