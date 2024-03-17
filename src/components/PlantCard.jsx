const PlantCard = ({ name, description, image, price }) => {
  return (
    <div className="plant">
      <img src={image} alt={name} />
      <div className="plant-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default PlantCard;
