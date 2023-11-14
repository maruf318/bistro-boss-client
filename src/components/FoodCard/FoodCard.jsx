import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //TODO: send cart data to database
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate("/login");
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn border-b-[#BB8506] border-2 bg-[#E8E8E8] text-[#BB8506] hover:bg-black"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
