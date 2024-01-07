
const RequesterInfo = ({ request, handleDeliver }) => {
    const { _id, foodId, loggedUserPhoto, requesterName, loggedUserEmail, requestedDate, foodRequestStatus } = request;
    // console.log(_id,foodId);
    console.log(foodRequestStatus);
  
    return (
        <tr className={`${foodRequestStatus === 'pending' ? 'table-row' : 'hidden'}`}>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={loggedUserPhoto} />
                        </div>
                    </div>
                  
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{requesterName}</div>
                </div>
            </td>
            <td>{loggedUserEmail}</td>
            <th>
                <div className="font-bold">{requestedDate}</div>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">{foodRequestStatus}</button>
                {
                    foodRequestStatus === 'delivered' ? <span className="font-bold text-primary">Delevered</span>
                        :
                        <button onClick={() => handleDeliver(foodId, _id)} className="btn btn-ghost btn-xs">Set Delivered </button>
                }
            </th>
        </tr>
    );
};

export default RequesterInfo;