export default function palyer(player){
  return(
    <div name="play">
    <img src={player.ImageUrl} alt={player.name} />
    <h2>{player.name}</h2>
    <p>{player.team}</p>
    <p>{player.nationality}</p>
    <p>{player.age}</p>
  </div>
  );
}

    
      
    

  
