import { useForm } from "react-hook-form"
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";

import data from "../data/data.json";
import { useContext, useRef } from "react";
import { TweetContext } from "../Context/contex";

export default function TweetEditorForm({ tweets, setTweets }) {
    const { register, handleSubmit, reset } = useForm();
    const dataTweets = useContext(TweetContext);
    const input = useRef();

    const onSubmit = (dataFrom) => {
        const newTweet = {
            user: data['current-user'],
            content: dataFrom,
            actions: {
                comments: 0,
                retweet: 0,
                like: 0,
            },
        };
        dataTweets.tweets = [newTweet, ...dataTweets.tweets];
        setTweets(dataTweets.tweets);
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} class="flex-grow w-full">
            <TweetEditorInput register={register} ref={input} />
            <TweetEditorButtons />
        </form>
    );
}