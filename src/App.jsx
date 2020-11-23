import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "67238d2f8d40ed3a4147171f44d395b42e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newArticles} />
    </div>
  );
};

export default App;

// 0b29fe7e71f94529bfd2f3ae04d06d41
