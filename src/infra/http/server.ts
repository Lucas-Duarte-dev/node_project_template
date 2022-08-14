import app from "@infra/http/app";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || 3000);