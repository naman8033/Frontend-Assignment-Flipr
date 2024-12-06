function Button({ text, onClickHandler }) {
  return (
    <>
      <button onClick={onClickHandler} className="px-8 py-2 mt-6 text-black font-semibold  bg-[#ffd050] hover:bg-opacity-80 active:bg-opacity-100 hover:shadow-sm hover:scale-[1.05] duration-100 active:scale-100">
        {text}
      </button>
    </>
  );
}

export default Button;
