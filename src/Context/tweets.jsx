import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

export const Context = createContext(null);

const TweetContext = ({ children }) => {
  const { data: currentData } = useFetch("http://localhost:3000/current-user");
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  const { data: tweetData } = useFetch("http://localhost:3000/tweets");
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: followData } = useFetch("http://localhost:3000/follow");
  const [follow, setFollow] = useState(null);
  useEffect(() => setFollow(followData), [followData]);

  return (
    current &&
    tweets &&
    follow &&

     (
      <Context.Provider value={{ tweets, setTweets, current, follow }}>
        {children}
      </Context.Provider>
    )
  );
};
export default TweetContext;