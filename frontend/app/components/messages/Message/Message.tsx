import React from "react";
import { tw } from "twind/css";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";

type emoji = "thumbUp";

type MessageProps = {
  from: string;
  message: string;
  className?: string;
  fromMe?: boolean; // Probably remove later
  reactions?: { [key in emoji]: { amount: number; people: {} } }[];
};

export const Message = ({ message, from, className, fromMe }: MessageProps) => {
  return (
    <div
      className={tw(
        `flex gap-2 w-4/5 2xl:w-3/5 mb-4`,
        { "flex-row-reverse self-end": fromMe },
        className
      )}
    >
      <div
        className={tw(`bg-cover bg-no-repeat bg-center h-8 w-8 rounded-full`)}
        style={{
          backgroundImage:
            "url(https://media.gq.com/photos/576da81dca9cabea38861a58/16:9/w_2399,h_1349,c_limit/Screen%20Shot%202016-06-24%20at%205.37.10%20PM.png)",
        }}
      ></div>
      <Flexbox
        direction="column"
        className={tw(`flex-1`, { "items-end": fromMe })}
      >
        <Text color="gray.main" size="body2">
          {from}
        </Text>
        <div
          className={tw(
            `flex p-3 bg-gray-100 rounded-3 border border-gray-300 relative`,
            {
              "rounded-tl-0": !fromMe,
              "rounded-tr-0 bg-primary-100!": fromMe,
            }
          )}
        >
          <Text>{message}</Text>
          <div className={tw`absolute flex left-0 -bottom-4 px-2 w-full`}>
            <div className={tw`flex flex-1 gap-2`}>
              <Reaction emoji="&#x1F44D;" amount={2} people={{}} />
              <Reaction emoji="&#x1F44D;" amount={1} people={{}} />
            </div>
            <Reaction
              emoji="&#x2795;"
              amount={1}
              people={{}}
              className="self-end"
            />
          </div>
        </div>
      </Flexbox>
    </div>
  );
};

interface ReactionProps {
  emoji: string;
  amount: number;
  people: object;
  className?: string;
}

const Reaction = ({ emoji, amount, className }: ReactionProps) => {
  return (
    <button
      className={tw(
        `flex justify-center items-center bg-white h-5 border border-secondary-100 rounded-full p-1 gap-1 transition-all duration-100 text-secondary-600 focus:outline-none hover:bg-secondary-100 hover:border-secondary-300 hover:text-black`,
        { "w-5": amount === 1 },
        className
      )}
    >
      <span className={tw``}>{emoji}</span>
      {amount > 1 && (
        <Text className={tw``} color="inherit">
          {amount}
        </Text>
      )}
    </button>
  );
};
