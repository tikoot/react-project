const PlantCard = ({ name, description, image, price }) => {
  return (
    <div className="flex flex-col bg-[#f4edf2] rounded-lg p-4 m-2">
      <img
        src={image}
        alt={name}
        className="h-[160px] object-cover rounded-lg"
      />
      <div className=" flex flex-col items-start mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{description}</p>
        <p>
          <b>Price:</b> ${price}
        </p>
        <button className="p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
