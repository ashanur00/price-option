import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOptions = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white'>
            <h2 className=''>
                <span className='text-5xl font-extrabold text-center'>{price}</span>
                <span className='text-2xl'></span>
            </h2>
            <h4 className='text-4xl mt-4 text-center'>{name}</h4>
           <div className='flex-grow'>
           {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
           </div>
            <button className='w-full btn bg-green-600 p-4 border-green-600 mt-6 font-bold text-white'>Buy Now</button>
        </div>
    );
};
PriceOptions.propTypes ={
    option: PropTypes.object
}
export default PriceOptions;
