export const StickyFrom = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-[linear-gradient(#272734,#000)] p-2 w-[35rem] gap-4 mx-auto rounded-lg flex"
    >
      <input
        type="text"
        placeholder="Enter your presentation topic"
        className="text-[#bdbfc5]  bg-[#000] border grow border-[#bdbfc5] h-full rounded-md px-4 py-3 text-xs"
      />

      <button
        type="submit"
        className="bg-[linear-gradient(45deg,#4f61ff,#f450f9)] rounded-md px-4 py-2 h-full text-white"
      >
        Generate
      </button>
    </form>
  );
};
