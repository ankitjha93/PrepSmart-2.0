import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
   
    url : 'postgresql://AI%20Mocker_owner:npDrAV5Heg0s@ep-odd-dust-a53bfxgw.us-east-2.aws.neon.tech/AI%20Mocker?sslmode=require', // Use environment variable for the connection string
  }
});
