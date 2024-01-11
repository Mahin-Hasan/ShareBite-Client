
const RequesterInfo = ({ request, handleDeliver }) => {
    const { _id, foodId, loggedUserPhoto, requesterName, loggedUserEmail, requestedDate, foodRequestStatus } = request;
    // console.log(_id,foodId);
    console.log(foodRequestStatus);
  
    return (
        <tr className={`${foodRequestStatus === 'pending' ? 'table-row' : 'hidden'}`}>
            <td className="px-1 text-xs sm:text-lg">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={loggedUserPhoto} />
                        </div>

                    </div>
                    <div className="font-bold">{requesterName}</div>

                  
                </div>
            </td>
           
            <td className="px-1 text-xs sm:text-lg">{loggedUserEmail}</td>
            <th className="px-1 text-xs sm:text-lg">
                <div className="font-bold">{requestedDate}</div>
            </th>
            <th className="px-1 text-xs sm:text-lg">
                <p className="text-blue-700 text-sm inline me-2">{foodRequestStatus}</p>
                {
                    foodRequestStatus === 'delivered' ? <span className="font-bold text-primary">Delevered</span>
                        :
                        <button onClick={() => handleDeliver(foodId, _id)} className="btn btn-xs bg-lime-400 border-none text-blue-700">Set Delivered </button>
                }
            </th>
        </tr>
    );
};

export default RequesterInfo;