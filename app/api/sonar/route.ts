import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const sonarCloudAPIUrl = "https://sonarcloud.io/api";
const authsonarCloudAPIUrl =
  "https://sonarcloud.io/api/authentication/validate";

const accessToken = "YOUR_ACCESS_TOKEN";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const query = url.searchParams.get("query") || "";
  // headers: {
  //   'Content-Type': 'application/json',
  // 'x-api-key': process.env.CMS_API_KEY // 👈 New Code
  // },
  console.log("query", query);
  const response = await fetch(
    `${sonarCloudAPIUrl}/issues/search?` +
      new URLSearchParams({
        componentKeys: query,
        types: "BUG,VULNERABILITY,CODE_SMELL",
      })
  )
    .then((response) => {
      // Process and handle the response data
      return response;
    })
    .then(async (data) => {
      return await data.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return NextResponse.json({ data: error });
    });
  console.log("response", response);
  return NextResponse.json({ data: response });
}
