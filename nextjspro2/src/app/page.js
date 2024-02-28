import ServerAction from "@/app/ServerAction/ServerAction";

export default function Home() {
  // const handleClick = async () => {
  //   let data = {
  //     name: "Nihar",
  //     role: "coder",
  //   };
  //   let a = await fetch("/api/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let res = await a.json();
  //   console.log("handlClick  res:", res);
  // };

  return (
    <>
      <div>
        <ServerAction />
      </div>
    </>
  );
}
