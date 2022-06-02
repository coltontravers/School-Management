import React, { forwardRef, useEffect, useRef } from "react";
import { tw } from "twind/css";
import { Flexbox, FlexboxProps } from "~/components/layout/Flexbox";
import { Message } from "../Message/Message";

export interface MessagesListProps {
  selectedGroup: string;
}

const ForwardedFlexbox = forwardRef((props: FlexboxProps, ref) => (
  <Flexbox forwardedRef={ref as any} {...props} />
));

export const MessagesList = ({ selectedGroup }: MessagesListProps) => {
  const chat = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chat.current) {
      chat.current.scrollTop = chat.current.scrollHeight;
    }
  }, [selectedGroup]);

  return (
    <ForwardedFlexbox
      direction="column"
      gap={2}
      className={tw`flex-1 overflow-auto py-6 px-3`}
      ref={chat}
    >
      <Message
        message="This is some boilerplate text here. And some more. How long will it
          go? Nobody knows, but it's getting alittle long now. Ahhhh it's
          getting pretty long."
        from="Colton Travers"
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
        go? Nobody knows, but it's getting alittle long now. Ahhhh it's
        getting pretty long."
        from="Colton Travers"
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
      go? Nobody knows, but it's getting alittle long now. Ahhhh it's
      getting pretty long."
        from="Colton Travers"
        fromMe
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
      go? Nobody knows, but it's getting alittle long now. Ahhhh it's
      getting pretty long."
        from="Colton Travers"
        fromMe
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
      go? Nobody knows, but it's getting alittle long now. Ahhhh it's
      getting pretty long."
        from="Colton Travers"
        fromMe
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
      go? Nobody knows, but it's getting alittle long now. Ahhhh it's
      getting pretty long."
        from="Colton Travers"
        fromMe
      />
      <Message
        message="This is some boilerplate text here. And some more. How long will it
      go? Nobody knows, but it's getting alittle long now. Ahhhh it's
      getting pretty long."
        from="Colton Travers"
        fromMe
      />
    </ForwardedFlexbox>
  );
};
