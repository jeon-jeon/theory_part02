import { Box, Kbd, Badge } from "@radix-ui/themes";
import Card from "./Card";
import { useDark } from "./context/useDark";

function App() {
  const { toggleDark } = useDark();
  return (
    <div className="App">
      <button onClick={() => toggleDark()}>버튼</button>
      <Card />
      <Kbd size="9">Shift + Tab</Kbd>
      <Box width="64px" height="64px">
        <Badge color="orange">In progress</Badge>
      </Box>
    </div>
  );
}

export default App;
