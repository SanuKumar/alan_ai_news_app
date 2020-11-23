import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";

const alanKey =
  "67238d2f8d40ed3a4147171f44d395b42e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

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
      <div className={classes.logoContainer}>
        <img
          className={classes.alanLogo}
          src="https://alan.app/voice/images/previews/preview.jpg"
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newArticles} />
    </div>
  );
};

export default App;

// 0b29fe7e71f94529bfd2f3ae04d06d41
// https://studio.alan.app/projects
// https://newsapi.org/docs/endpoints/top-headlines
// https://github.com/adrianhajdin/project_news_alan_ai
// https://gist.github.com/adrianhajdin/bab49eac7dcf9c095fce37ae1167dd87
