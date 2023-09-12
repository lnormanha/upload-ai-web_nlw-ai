import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";

export function App() {
  return (
    <div className="bg-background items-center justify-center">
      <Button>Hello World</Button>
      <ModeToggle />
    </div>
  );
}
