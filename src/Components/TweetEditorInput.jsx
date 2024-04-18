
export default function TweetEditorInput({ register }) {

    return (
        <input 
            type="text" 
            name="Post"
            className="h-24 w-full border-none outline-none text-xl bg-black text-white resize-none px-4 pt-4 pb-2 mb-4 whitespace-pre-wrap " 
            placeholder="What's happening?"
            {...register("text", { required: "Veillez écrire un poste valide", maxLength: { value:180, message: "Vous avez dépassé 180 caractères"}})}
        />
    )
}