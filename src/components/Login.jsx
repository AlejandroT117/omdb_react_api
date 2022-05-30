import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getByTitle } from "../helpers/omdb";

export const Login = () => {
  const [values, setValues] = useState(null);
  const [sent, setSent] = useState(false);

  const { setMovie } = useContext(AppContext);

  useEffect(() => {
    async function fetching() {
      const response = await getByTitle(values?.title);
      setMovie(response);
      setSent(false);
    }
    fetching();
  }, [sent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} name='form'>
        <label htmlFor="title">Buscar por título</label>
        <br/>
        <input type="text" name="title" onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
