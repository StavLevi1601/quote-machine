// https://api.api-ninjas.com/v1/quotes?category=
export const fetchData = async () => {
  const result = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=happiness",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "Om2z5XQ3KsUtGIvHt/61+Q==TUx972eAzH3sSWyS",
      },
    }
  );
  const data = await result.json();
  return data;
};
