import { React } from "react";
import { Counter } from "../../counter/counter.jsx";
import { useForm } from "./use-form.jsx";

export const ReviewForm = () => {
    const {form, setName, setText, setRating, clear} = useForm();

    return <form onSubmit={(e) => e.preventDefault()}>
        <h3>Написать отзыв:</h3>
        <div>
            <div><label>Имя</label></div>
            <input value={form.name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <div><label>Текст</label></div>
            <input value={form.text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div>
            <div><label>Рейтинг</label></div>            
            <Counter
                min={1}
                max={5}
                value={form.rating}
                onIncrease={() => setRating(form.rating + 1)}
                onDecrease={() => setRating(form.rating - 1)}
            />
        </div>
        <button style={{marginTop: "1rem"}} 
            onClick={clear}>Сброс</button>
    </form>;
};