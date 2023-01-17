import { useEffect, useState } from "react";

const Search = () => {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    let identifier = null;
    if (searchKey.length) {
      identifier = setTimeout(() => {
        setNumbers((numbers) => [...numbers, Math.trunc(Math.random() * 20)]);
        setLoading(false);
      }, 300);
    }

    return () => {
      if (searchKey.length) {
        setLoading(true);
      }
      clearTimeout(identifier);
    };
  }, [searchKey]);

  return (
    <div>
      <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      {loading && <p>Getting Server Data</p>}
      <div>
        {numbers &&
          numbers.map((number, index) => {
            return <li key={number}>{number}</li>;
          })}
        {loading && <li>-----------</li>}
      </div>
    </div>
  );
};

export default Search;
