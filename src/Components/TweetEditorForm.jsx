//Importation des composants............................................
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";

//Importation des dépendances............................................
import { useContext } from "react";
import { Context } from "../Context/tweets";
import { useForm } from "react-hook-form"

//Importation des axios...................................................
import axios from "axios";

export default function TweetEditorForm() {
    const { register, handleSubmit, reset, formState:{errors} } = useForm();
    const { tweets, setTweets, current } = useContext(Context);

    const onSubmit = (dataFrom) => {
        const newTweet = {
            user: current,
            content: dataFrom,
            actions: {
                comments: 0,
                retweet: 0,
                like: 0,
                state: true,
            },
        };
        console.log(newTweet)
        axios
         .post("https://twitter-clone-backend-9t09.onrender.com/tweets", newTweet)
         .then((response) => {
            setTweets([...tweets, response.data]);
         })
         .catch((error) => console.error(error))
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow w-full">
            <TweetEditorInput register={register} />
            {
                errors.text && (
                    <p className="text-red-600 italic">{errors.text.message}</p>
                )
            }
            <TweetEditorButtons />
        </form>
    );
}