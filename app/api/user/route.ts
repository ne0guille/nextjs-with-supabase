export default function handler(req: any, res: any) {
  // Perform server action
  const myUsers = [
    { id: 1, name: "Odioko" },
    { id: 2, name: "Victor" },
  ];

  // Return the response
  res.status(200).json(myUsers);
}
