import { RenderElementProps } from "slate-react";

// TODO: Add better types
const Element = ({
  attributes,
  children,
  element,
  ...rest
}: {
  attributes: any;
  children: any;
  element: any;
  mark: any;
}) => {
  console.log("element", {
    attributes,
    children,
    element,
    ...rest,
  });
  console.log(element.type);
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export default Element;
