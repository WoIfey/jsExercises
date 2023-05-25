const Profile = () => {
  return (
    <main className="min-h-screen">
      <div className="flex w-full h-screen flex-col items-center justify-center gap-20">
        <h1 className="text-slate-50 hover:-translate-y-20 duration-700 relative z-20 text-center text-[8rem]">
          My Favorite
        </h1>
        <div className="max-sm:w-full z-20 h-[55vh] w-[20%]">
          <div className="bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 bg-[url('/1.jpg')]">
            <p className="text-3xl text-amber-50 font-bold">Nightshade</p>
            <p className="text-amber-50 font-bold">
              NightShade is a fierce warrior, known for her agility and stealth.
              She is a skilled fighter who prefers to strike from the shadows,
              using her knowledge of the terrain to outmaneuver her enemies. Her
              reputation precedes her, and many fear the mere mention of her
              name. Despite her formidable skills, NightShade is a solitary
              figure, keeping her own counsel and never revealing her true
              motives.
            </p>
            <button className="p-4 bg-amber-100 text-xl font-bold rounded shadow-lg">
              Add favorite
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
