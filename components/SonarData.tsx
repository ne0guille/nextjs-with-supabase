export default async function SonarData() {
  //   const response = await fetch(
  //     "http://localhost:3000/api/sonar?query=ne0guille_nextjs-with-supabase"
  //   );
  //   const { pending } = useFormStatus();
  //   console.log("pending", pending);
  const response = await fetch("http://localhost:3000/api/codeclimate");
  const sonarData = await response.json(); // TODO parse response on server
  console.log(sonarData);
  return (
    <pre
      style={{
        width: "80%",
        whiteSpace: "break-spaces",
      }}
    >
      {sonarData?.data.length && JSON.stringify(sonarData?.data.slice(0, 1))}
    </pre>
  );
}
