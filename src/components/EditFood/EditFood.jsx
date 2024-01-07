import { useLoaderData } from "react-router-dom";

const EditFood = () => {
    const foods = useLoaderData();
    const { foodName } = foods;

    return (
        <div>
            <h1>this is edit food for:{foodName} </h1>
        </div>
    );
};

export default EditFood;