const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-slate-900 text-white right-0 mt-4 mr-10 md:mr-6 p-3 rounded-md">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn border-b-[#BB8506] border-2 bg-[#E8E8E8] text-[#BB8506] hover:bg-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
