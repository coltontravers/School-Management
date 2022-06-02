import { tw } from "twind/css";
import { SearchInput } from "~/components/inputs/SearchInput";

type PageHeaderProps = {};

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div
      className={tw`flex sticky top-0 z-40 justify-center py-3 bg-gray-100 border-b border-b-gray-300`}
    >
      <SearchInput id="search-header" placeholder="Search..." />
    </div>
  );
};
