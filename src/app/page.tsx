"use client";

import {
  ComboBox,
  Label,
  Button,
  Popover,
  ListBox,
  Item,
  Input,
} from "react-aria-components";

export default function Home() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <div>
        <Input />
        <Button>Open</Button>
      </div>
      <Popover>
        <ListBox>
          <Item>Aardvark</Item>
          <Item>Cat</Item>
          <Item>Dog</Item>
          <Item>Kangaroo</Item>
          <Item>Panda</Item>
          <Item>Snake</Item>
        </ListBox>
      </Popover>
    </ComboBox>
  );
}
