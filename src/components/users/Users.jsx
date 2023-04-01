
import UserBox from '../user-box/UserBox'
const userArr = [{
    created_at: "20-12-2007",
    type: "income",
    category: "salary",
    amount: 5000
},
{
    created_at: "10-4-2017",
    type: "expense",
    category: "gym",
    amount: 125
},
{
    created_at: "20-01-1997",
    type: "expense",
    category: "shopping",
    amount: 600
},
{
    created_at: "02-02-2002",
    type: "expense",
    category: "family",
    amount: 2000
}
]
const Users = () => {
    return(
        <div>
          {userArr.map((user, index) => {
  return <UserBox key={index} info={user} />;
})}
        </div>
    )
}

export default Users
