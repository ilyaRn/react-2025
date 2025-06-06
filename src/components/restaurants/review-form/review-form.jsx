import { React, useContext } from "react";
import { Counter } from "../../counter/counter.jsx";
import { useForm } from "./use-form.jsx";
import { Button } from "../../button/button.jsx";
import { AuthContext } from "../../contexts/auth-context/index.jsx";
import style from "./review-form.module.css";

export const ReviewForm = () => {    
    const {form, setName, setText, setRating, clear} = useForm();
    const {auth} = useContext(AuthContext);

    if (!auth.username) {
        return null;
    }

    return <form 
            className={style.form}
            onSubmit={(e) => e.preventDefault()}>
        <h3>Write a review:</h3>
        <div>
            <div><label>Name</label></div>
            <input value={form.name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <div><label>Text</label></div>
            <input value={form.text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div>
            <div><label>Rating</label></div>            
            <Counter
                min={1}
                max={5}
                value={form.rating}
                onIncrease={() => setRating(form.rating + 1)}
                onDecrease={() => setRating(form.rating - 1)}
            />
        </div>
        <Button
            title="Reset"            
            onClick={clear} />
    </form>;
};