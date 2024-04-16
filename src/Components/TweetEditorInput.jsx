
export default function TweetEditorInput({ register, ref }) {

    return (
        <input 
            ref={ref}
            type="text" 
            name="Post"
            className="h-24 w-full border-none outline-none text-xl bg-black text-white resize-none px-4 pt-4 pb-2 mb-4" 
            placeholder="What's happening?"
            {...register("text", { required: "Veiller ecrire un poste valide" })}
        />
    )
}