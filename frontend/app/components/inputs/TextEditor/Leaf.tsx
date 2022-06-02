import { RenderLeafProps } from "slate-react";

// TODO: Get better types
const Leaf = ({
  attributes,
  children,
  leaf,
}: {
  leaf: any;
  children: any;
  attributes: RenderLeafProps["attributes"];
}) => {
  console.log("leaf:", { attributes, children, leaf });

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.fontSize) {
    children = (
      <span id="font" style={{ fontSize: "50px!important" }}>
        {children}
      </span>
    );
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
