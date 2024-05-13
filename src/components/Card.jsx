import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, image, description } = props.recipe;
  return (
    <Link
      to={`/recipes/${id}`}
      className="w-[30%] text-center mb-[3%] mr-[3.3%] b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
    >
      <img className="w-[80%] rounded-xl" src={image} alt={title} />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description.slice(0, 100)}...</p>
      <div className="flex justify-between text-zinc-400 mt-5">
        <p className="text-center ">
          <i className="ri-timer-line"></i>
          <br />
          <span className="text-sm">20min</span>
        </p>
        <p className="text-center">
          <i className="ri-thumb-up-line"></i>
          <br />
          <span className="text-sm">Easy</span>
        </p>
        <p className="text-center">
          <i className="ri-share-line"></i>
          <br />
          <span className="text-sm">Share</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
