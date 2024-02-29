import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main Page</h1>

      <Button variant={"mybtn"}>Test Button</Button>

      <Button variant={"outline"}>ShadeCn Button</Button>
      <Button variant={"destructive"}>ShadeCn Button</Button>
      <Button variant={"secondary"} size={"sm"}>
        ShadeCn Button
      </Button>
    </main>
  );
}
