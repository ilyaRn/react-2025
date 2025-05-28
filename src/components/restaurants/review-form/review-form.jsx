import { React } from "react";
import { Counter } from "../../counter/counter.jsx";
import { useForm } from "./use-form.jsx";

export const ReviewForm = () => {
    const {form, setName, setText, clear} = useForm();

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
            {/*
                С одной стороны кажется что это костыльное решение.
                С другой стороны, как сбросить внутреннее состояние компонента?
                Проще всего пересоздать компонент и в этом нам помогает key prop.
                Смущает что пришлось добавить в состояние формы переменную clearCounter.
                Может быть есть способ поинтереснее, что скажите?
            */}
            <Counter key={form.clearCounter} min={0} max={5}/>
        </div>
        <button style={{marginTop: "1rem"}} 
            onClick={clear}>Сброс</button>
    </form>;
};