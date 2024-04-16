import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button";

export default function TweetEditorButtons (){
    return (
        <div className="flex items-center justify-between">
            <TweetEditorActions />
            <Button />
        </div>
    )
}