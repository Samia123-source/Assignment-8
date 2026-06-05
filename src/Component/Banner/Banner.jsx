

const Banner = () => {
    return (
       <div className="hero bg-gray-100 min-h-screen rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/m59YKvC4/image.png"
      className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold text-black mb-6">Books to freshen up your bookshelf</h1>
     
      <button className="btn btn-primary p-2  text-white bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;