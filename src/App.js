import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import {useForm} from "react-hook-form";

function App() {
    const [countAardbei, setCountAardbei] = useState(0);
    const [countBanaan, setCountBanaan] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);
    const [countAppel, setCountAppel] = useState(0);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            age: 16,
            "week": "every-month",
        }
    });

    function resetNumbers() {
        setCountAardbei(0);
        setCountKiwi(0);
        setCountAppel(0);
        setCountBanaan(0);
    }

    function handleClick(data) {
        console.log(data)
        console.log(`Je hebt ${countKiwi} kiwi's, ${countAardbei} aardbeien, ${countBanaan} bananen en ${countAppel} appels besteld`)
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <FruitCounter fruitTitle=" 🍓 Aardbeien" count={countAardbei} setCount={setCountAardbei}/>
        <FruitCounter fruitTitle=" 🍌 Bananen" count={countBanaan} setCount={setCountBanaan}/>
        <FruitCounter fruitTitle=" 🥝 Kiwi's" count={countKiwi} setCount={setCountKiwi}/>
        <FruitCounter fruitTitle=" 🍏 Appels" count={countAppel} setCount={setCountAppel}/>

        <button
            type="button"
            onClick={resetNumbers}
        >
            Reset
        </button>

        <form onSubmit={handleSubmit(handleClick)}>
            <label htmlFor="details-first-name">
                Voornaam:
                <input
                    type="text"
                    id="details-first-name"
                    {...register("first-name")}
                    placeholder="Uw naam"
                />
            </label>
            <br/>
            <label htmlFor="details-last-name">
                Achternaam:
                <input
                    type="text"
                    id="details-last-name"
                    {...register("last-name")}
                />
            </label>
            <br/>
            <label htmlFor="details-age">
                Leeftijd:
                <input
                    type="number"
                    id="details-age"
                    {...register("age")}
                />
            </label>
            <br/>
            <label htmlFor="details-postcode">
                Postcode:
                <input
                    type="number"
                    id="details-postcode"
                    {...register("city-code")}
                />
            </label>
            <br/>
            <p>Bezorgfrequentie:</p>
            <select
                {...register("week")}
            >
                <option value="every-week">Iedere week</option>
                <option value="week-for-week">Om de week</option>
                <option value="every-month">Iedere maand</option>
            </select>
            <br/>

            <label htmlFor="day">
                <input
                    type="radio"
                    id="day"
                    value="Overdag"
                    {...register("day", {required: true})}
                />
                Overdag:
            </label>
            <label htmlFor="afternoon">
                <input
                    type="radio"
                    id="afternoon"
                    value="In de avond"
                    {...register("day", {required: true})}
                />
                S'avonds:
            </label>
            <br/>
            <p>Opmerkingen:</p>
            <label htmlFor="comments">
                <textarea
                    {...register("comments", {
                        required: "Opmerkingen mogen niet leeg zijn",
                        maxLength: {
                            value: 50,
                            message: "Er mogen maximaal 50 karakters gebruikt worden"
                        },
                    })}
                    id="comments"
                    cols="30"
                    rows="10"
                    placeholder="Heeft u nog iets aan te vullen?"
                >
                </textarea>
                {errors.comments && <p>{errors.comments.message}</p>}
            </label>
            <br/>
            <label htmlFor="akkoord">
                <input
                    type="checkbox"
                    id="akkoord"
                    {...register("agreement")}
                />
                Ik ga akkoord met de algemene voorwaarden
            </label>
            <br/>
            <button type="submit">
                Versturen
            </button>
        </form>

    </>
  );
}

export default App;
