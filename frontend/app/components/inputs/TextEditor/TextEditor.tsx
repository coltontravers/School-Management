import { useCallback, useMemo, useState } from "react";
import { Editable, withReact, Slate } from "slate-react";
import {
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";
import { tw } from "twind";
import BlockButton from "./BlockButton";
import MarkButton from "./MarkButton";
import Element from "./Element";
import Leaf from "./Leaf";
import { SizeSelector } from "./SizeSelector";
import { toggleMark } from "./utils";

type TextEditorProps = {
  className?: string;
};

export const TextEditor = ({ className }: TextEditorProps) => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  // @ts-ignore
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <div className={tw(`rounded`, className)}>
        <div className={tw`flex border-2 border-b-0 border-gray-300 rounded-t`}>
          <div className={tw`p-1`}>
            <SizeSelector
              size={16}
              onChange={(size) => {
                toggleMark(editor, "fontSize", size);
                // Editor.addMark(editor, "font-size", size);
              }}
            />
          </div>
          <div className={tw`border-r border-r-gray-main`}>
            <MarkButton format="bold" icon="ant-design:bold-outlined" />
            <MarkButton format="italic" icon="ant-design:italic-outlined" />
            <MarkButton
              format="underline"
              icon="ant-design:underline-outlined"
            />
            <BlockButton format="block-quote" icon="entypo:quote" />
          </div>
          <div className={tw`border-r border-r-gray-main`}>
            <BlockButton format="left" icon="akar-icons:text-align-left" />
            <BlockButton
              format="center"
              icon="ant-design:align-center-outlined"
            />
            <BlockButton
              format="right"
              icon="ant-design:align-right-outlined"
            />
          </div>
          <div>
            <BlockButton
              format="numbered-list"
              icon="fluent:text-number-list-ltr-16-regular"
            />
            <BlockButton
              format="bulleted-list"
              icon="clarity:bullet-list-line"
            />
          </div>
        </div>
        <Editable
          className={tw`min-h-[100px]! p-2 border-2 rounded-b border-gray-300 focus:border-primary-main`}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Type something..."
          spellCheck
          autoFocus
        />
      </div>
    </Slate>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

// const initialValue: Descendant[] = [
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is editable " },
//       { text: "rich", bold: true },
//       { text: " text, " },
//       { text: "much", italic: true },
//       { text: " better than a " },
//       { text: "<textarea>", code: true },
//       { text: "!" },
//     ],
//   },
//   {
//     type: "paragraph",
//     children: [
//       {
//         text: "Since it's rich text, you can do things like turn a selection of text ",
//       },
//       { text: "bold", bold: true },
//       {
//         text: ", or add a semantically rendered block quote in the middle of the page, like this:",
//       },
//     ],
//   },
//   {
//     type: "block-quote",
//     children: [{ text: "A wise quote." }],
//   },
//   {
//     type: "paragraph",
//     align: "center",
//     children: [{ text: "Try it out for yourself!" }],
//   },
// ];
