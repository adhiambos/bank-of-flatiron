const Table = () => {

    const transaction = [
{
Date: "2024-02-01",
Description: "Cheque from tenant",
Category: "Rent",
Amount: 20000
},
{
Date: "2024-03-01",
Description: "Uber ride",
Category: "Transport",
Amount: 1055
},
{
Date: "2024-02-02",
Description: "Glovo delivery",
Category: "Food",
Amount: 1500
},
{
Date: "2024-02-04",
Description: "Sneakers",
Category: "Fashion",
Amount: 4000
},
{
Date: "2024-02-06",
Description: "Massage",
Category: "Spa",
Amount: 3500
}
    ]
    return ( 
        <div>
        <table>
        <thead>
        <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {transaction.map((value,key)=>{
            return(
                <tr>
                <td>{value.Date}</td>
                <td>{value.Description}</td>
                <td>{value.Category}</td>
                <td>{value.Amount}</td>
                </tr>
            )
        })}
        </tbody>
        </table>
        
        </div>
     );
}
 
export default Table;