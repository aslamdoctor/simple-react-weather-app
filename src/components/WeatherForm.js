const WeatherForm = ({ city, handleSubmit, handleSetCity }) => {
  return (
    <form
      className="flex justify-between mb-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="City"
        className="flex-1 p-3"
        value={city}
        onChange={handleSetCity}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 uppercase font-bold"
      >
        Check
      </button>
    </form>
  );
};

export default WeatherForm;
