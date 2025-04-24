function Intrest({ data, setData, errors }) {
  const { intrests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      intrests: e.target.checked
        ? [...prevState.intrests, e.target.name]
        : prevState.intrests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={intrests.includes("coding")}
              onChange={handleDataChange}
            />
            Coding
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={intrests.includes("music")}
              onChange={handleDataChange}
            />
            Music
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="dance"
              checked={intrests.includes("dance")}
              onChange={handleDataChange}
            />
            Dance
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="singing"
              checked={intrests.includes("singing")}
              onChange={handleDataChange}
            />
            Singing
          </label>
        </div>
        {errors.intrests && <span className="error">{errors.intrests}</span>}
      </div>
    </>
  );
}

export default Intrest;
