import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";
import enforce from "express-sslify";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(compression);
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, error => {
	if (error) throw error;
	console.log(`Server is running on port: ${port}`);
});

app.get("/serviceWorker.js", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "build", "serviceWorker.js"));
});
