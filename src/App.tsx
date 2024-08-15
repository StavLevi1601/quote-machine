import { ThemeProvider } from "styled-components";
import "./App.css";
import {
  Author,
  Button,
  FullButtons,
  GlobalStyle,
  QuoteBox,
  Text,
} from "./styles/quoteStyle";
import { theme } from "./theme/styleTheme";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "./utils/fetch";
import { useColor } from "./context/appContext";

export const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const colorContext = useColor();
  const isInitialMount = useRef(true);

  const fetchNewQuote = async () => {
    const data = await fetchData();
    if (data && data.length > 0) {
      setQuote(data[0].quote);
      setAuthor(data[0].author);
      colorContext?.changeColor();
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchNewQuote();
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle color={colorContext?.color || "defaultColor"} />{" "}
        <QuoteBox>
          <Text style={{ color: colorContext?.color }}>{quote}</Text>
          <Author style={{ color: colorContext?.color }}>{author}</Author>
          <FullButtons>
            <Button
              onClick={fetchNewQuote}
              style={{ backgroundColor: colorContext?.color }}
            >
              New Quote
            </Button>
          </FullButtons>
        </QuoteBox>
      </ThemeProvider>
    </>
  );
};

export default App;
