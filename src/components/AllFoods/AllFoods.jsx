
const AllFoods = ({allFood}) => {
    const {foodName,expiredDateTime} =allFood;
    return (
        <div>
            {/* <h1>this is All Foods</h1> */}
            <p>Food Name: {foodName}</p>
            <p>Validaty: {expiredDateTime} days remaining</p>

            {/* Modal */}
            
        </div>
    );
};

export default AllFoods;