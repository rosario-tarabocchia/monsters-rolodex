// import { Component } from "react";
import "./monster-card.styles.css";

const MonsterCard = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt="monster"
        src={`https://www.robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// class MonsterCard extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt="monster"
//           src={`https://www.robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default MonsterCard;
