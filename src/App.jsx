const style = {
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  section: `flex flex-col content-center rounded-md border-solid container border-8 border-slate-900 p-4`,
  inputsContainer: `flex content-center  my-4 justify-between `,
  input: `p-2 bg-[#dce1eb] rounded-md w-40`,
  button: `bg-[#ac485a]  p-2 rounded-md shadow text-white font-bold`,
};

function App() {
  return (
    <>
      <section className={style.section}>
        <h1 className={style.heading}>Hesabu 🧮</h1>
        <div className={style.inputsContainer}>
          <input type="text" placeholder="Item" className={style.input} />
          <input type="number" placeholder="Amount" className={style.input} />
        </div>
        <button type="button" className={style.button}>
          Add to Cart
        </button>
      </section>
    </>
  );
}

export default App;
