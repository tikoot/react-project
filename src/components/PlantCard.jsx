const PlantCard = ({ name, description, image, price }) => {
  return (
    <div className="plant">
      <img src={image} alt={name} className="plantImg" />
      <div className="plant-details">
        <h3>{name}</h3>
        <p className="plant-desc">{description}</p>
        <p>
          <b>Price:</b> ${price}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default PlantCard;
