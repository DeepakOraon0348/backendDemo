import express from "express";
const app = express();

app.use(express.static('dist'))
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get  a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Bug Problem",
      joke: "Why don't programmers like nature? It has too many bugs.",
    },
    {
      id: 2,
      title: "Java vs C#",
      joke: "Why do Java developers wear glasses? Because they can't C#.",
    },
    {
      id: 3,
      title: "Console Comfort",
      joke: "How do you comfort a JavaScript bug? You console it.",
    },
    {
      id: 4,
      title: "Breakup Blues",
      joke: "Why was the function sad after a breakup? Because it didn’t get a closure.",
    },
    {
      id: 5,
      title: "RESTing API",
      joke: "What did the API say to the frontend developer? I’m RESTing now, come back later.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server at http://localhost:${port}");
});
