import { useState } from "react";
import { css, tw } from "twind/css";
import { Button } from "../Button";

interface TabsProps {
  tabs: { value: string; label: string }[];
  defaultActiveTab?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tabs = ({
  tabs,
  defaultActiveTab,
  onChange,
  className,
  ...restProps
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleChange = (value: string) => {
    if (activeTab !== value) {
      setActiveTab(value);
      onChange?.(value);
    }
  };

  return (
    <div className={tw(className)} {...restProps}>
      {tabs.map(({ value, label }) => {
        return (
          <Button
            variant="transparent"
            textColor="black"
            key={value}
            onClick={() => handleChange(value)}
            className={tw(`!rounded-0`, {
              "border-b-4 border-primary-main": activeTab === value,
            })}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};
