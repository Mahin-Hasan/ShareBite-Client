import { Link } from "react-router-dom";

const FeaturedJobs = ({ food }) => {
    const { _id, foodName, foodImage,foodQuantity } = food;
    return (
        <div>
            <h1>This is featured Jobs</h1>
            <p>total food {foodName}</p>
            <p>Person to be served {foodQuantity}</p>
            <img src={foodImage} alt="" />
            <Link to={`/food/${_id}`}>
                <button className="btn btn-primary">View Food Detail</button>
            </Link>
        </div>
    );
};

export default FeaturedJobs;