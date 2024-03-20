import PriceOptions from "../PriceOptions/PriceOptions";


const PriceOpsion = () => {
   const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: "$30/month",
          features: [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access",
            "Free Wi-Fi",
            "Discounts on personal training sessions"
          ]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: "$50/month",
          features: [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to group classes",
            "Locker room access",
            "Free Wi-Fi",
            "Discounts on personal training sessions"
          ]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: "$80/month",
          features: [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to group classes",
            "Access to swimming pool",
            "Sauna access",
            "Locker room access",
            "Free Wi-Fi",
            "Discounts on personal training sessions",
            "Complimentary towel service",
            "Nutritional consultation"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-5">Basat Prices in the town</h2>
          <div className="grid md:grid-cols-3 gap-10">
          {
            priceOptions.map(option => <PriceOptions key={option.id} option={option}></PriceOptions>)
           } 
          </div>
        </div>
    );
};

export default PriceOpsion;