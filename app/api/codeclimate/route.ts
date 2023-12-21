import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const codeClimateAPIUrl = "https://api.codeclimate.com/v1";
const authsonarCloudAPIUrl =
  "https://sonarcloud.io/api/authentication/validate";

const repoUrl =
  "https://api.codeclimate.com/v1/repos/656dfb42e98d2b5e3c0647cf/snapshots/656f49bc592a5d0001001f73/issues";

const accessToken = process.env.CODECLIMATE_API_KEY;

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const query = url.searchParams.get("query") || "";
  // headers: {
  //   'Content-Type': 'application/json',
  // 'x-api-key': process.env.CMS_API_KEY // 👈 New Code
  // },
  //   new URLSearchParams({
  //     componentKeys: query,
  //     types: "BUG,VULNERABILITY,CODE_SMELL",
  //   })
  console.log("query", query);
  const response = await fetch(
    `${codeClimateAPIUrl}/repos/656dfb42e98d2b5e3c0647cf/snapshots/656f49bc592a5d0001001f73/issues?`
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
  const importantIssues = response?.data?.filter((issue: any) => {
    return (
      issue.attributes.severity === "major" ||
      issue.attributes.severity === "critical"
    );
  });

  importantIssues.forEach((element: any) => {
    delete element.attributes.content.body;
    return {
      ...element,
    };
  });

  console.log("response", importantIssues);
  return NextResponse.json({ data: importantIssues });
}
