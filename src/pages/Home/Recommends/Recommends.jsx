import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recommendedImg1 from "../../../assets/home/slide2.jpg";
import recommendedImg2 from "../../../assets/home/slide3.jpg";
import recommendedImg3 from "../../../assets/home/slide5.jpg";

const Recommends = () => {
  return (
    <section>
      <SectionTitle
        heading={"Chef recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommendedImg1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizza</h2>
            <p>
              Tomato sauce, mozzarella cheese, pepperoni, mushrooms, and fresh
              basil
            </p>
            <div className="card-actions">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-[#BB8506] border-b-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommendedImg2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Soup</h2>
            <p>
              Chicken broth, vegetables (carrots, celery, onions), chicken,
              noodles, and seasonings
            </p>
            <div className="card-actions">
              <button className="btn bg-[#1F2937] text-[#BB8506] ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* Third card */}
        <div className="card  bg-[#F3F3F3] shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommendedImg3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Salad</h2>
            <p>
              Mixed greens, cherry tomatoes, cucumbers, feta cheese, and
              balsamic vinaigrette
            </p>
            <div className="card-actions">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-[#BB8506] border-b-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
