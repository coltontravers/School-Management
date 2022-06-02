import { css, tw } from "twind/css";
import { Dropdown } from "~/components/Dropdown";
import { Button } from "~/components/inputs/Button";
import { SearchInput } from "~/components/inputs/SearchInput";
import { Select } from "~/components/inputs/Select";
import { TextInput } from "~/components/inputs/TextInput";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { LibraryCard } from "~/components/library/LibraryCard/LibraryCard";
import { Table } from "~/components/Table";
import { Text } from "~/components/Text";

const fileTypeOptions = [
  {
    label: "All Types",
    value: "all",
  },
];

const viewOptions = [
  {
    label: "Table",
    value: "table",
  },
  {
    label: "Cards",
    value: "cards",
  },
];

export default function Index() {
  return (
    <PageWrapper padding={3} gap={4}>
      <Flexbox direction="column" className={tw``} gap={2}>
        <Text size="h4">Quick Access</Text>
        <Flexbox alignItems="center" justifyContent="spaceBetween" gap={2}>
          <LibraryCard
            type="folder"
            title="title"
            thumbnail="https://lh3.googleusercontent.com/fife/AAWUweWdIKAWeJ07C-KDvPApezcQa-SxehtF-PAEqY_0zovQYvJa3-lzb9TwSJhBKGLDuRAMfjh4YaVkdv2JI9aUBV1g5q-WSZSY2Hi1YyqsNUTDOKUEgNweEeCUEDBO6-qxADF7vE-MPtW_T_hjM1GU5pgQyLfqEE4sThX5LnZ1vQyxWiBl4L2fPRSDWCSOThr6RY8wCS_Oq86t0JT5xw568Rb8E4C7gNAgpQHCcmCLmaS76u-0TaueHwH09q0vTDZVW4BU7rBqWaaitOBBFkbJM5Zk94AnCm_jt5KuL9d00A-87v5y5vt84WmN3ewJO9iZE5j0GKDzHXQ_SpFl8Z75LOIPfZOQnWWEOZCo9ca-rvNJQa-lXnZW5yvS78ZJijz66VfAHt33_F2PLjtsqbxmCnAmd51qWhhPKHtw4zFAZvr_7zvCuMupLjUsnreXQI28zB8OwPA267r3RLhKVbPkyNK0rrIs-hFaV-MHsd5ewqCsWJDeR__V1S-WV8qfTG1joBsWBtZODl7EIVcFIM_FQBuI8e3_H5jQfqQ-2zOpTNBjoegW3ez2plrtbpEXoowMt5kSfPTl2i40hwxsOCXYBP6w_t1oZFT7ospR1JWAK4PTSzyrE1FdVOZO_CuFuzcgRN6ONsFc5IVUx8C49ra5kP4KOk7Kz5JYJrf2q3uIBEXw5T4bXpsCqz9qkZvAtwGYC7QzpKM1cb5nm8wraawh3tMM_kbGIdQZSIjnEfdcmikZ8PGZ9EjoTUx5EWi73f2LHJeU8JGeDxF3PAE-iL2Rf1mdifw0lVF3PBoYRHR01b5uTJ-TQ_1lsnfIY2jeUL2B7CBSCZcoGh59iL2uD0lBbomsQd3txqI8eImgpCpuGM0xiDJjDhGrrUguRFAZFiIjv5nZYo7yQ1XpPOXD9FYvD24Nut5eSeBGg62bZG5pha_Dc-hidCQfHWz3Qw88r769yTqYLnvy-sTh-B4-H5GDG6zj5gGHnO3JYsjF_Bmbgmo5-P8hgurUQCCUQ2j3C2c5KZdU5w9aWFtojKoyO8JSUmJuL9SF-uIj6DmNfUSJzQY_ecikhpHeUp19rZvPONgblMSrzi1fUHjnwZnqe5GzN-LfUYiTW1n3fjewQBCF3fOKy9RenrR5xBsYhkj39L1Mm1QZLdlummRecWmFisVp6Flj_JzjQ0Fu8Ps74ORaFs5i2fRC75ZAvgbFlK7BhwlBR9YnejFHErqJxgkRGCkTKWo5xFRDKKyFj1vsHcvRrieb5GXrSi-MVRtz6oxnlZo93QHpju1zKGB-ZLNGMeWTaOwxPmv72nV_j2uAI1gV9oaol5rLxUDnFo-TERLTOnA_yoG7CY0-WHR_JF4rN202tzzYe4RCykPX3oW3j0rVWDPqy5sj21uMbWQs1b3UV8EJ=w250-h238-p-k-nu"
          />
          <LibraryCard type="video" title="title" />
          <LibraryCard type="image" title="title" />
          <LibraryCard type="document" title="title" />
          <LibraryCard type="folder" title="title" />
          <LibraryCard type="folder" title="title" />
          <LibraryCard type="image" title="title" />
          <LibraryCard type="document" title="title" />
          <LibraryCard type="folder" title="title" />
          <LibraryCard type="folder" title="title" />
        </Flexbox>
      </Flexbox>
      <Flexbox gap={4} justifyContent="end" wrap="wrap">
        <Select options={fileTypeOptions} defaultValue={fileTypeOptions[0]} />
        <Select options={viewOptions} defaultValue={viewOptions[0]} />
        <SearchInput id="search-library" placeholder="Search files..." />
      </Flexbox>
      <div
        className={tw(
          `grid gap-4`,
          css`
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          `
        )}
      >
        <LibraryCard type="folder" title="title" />
        <LibraryCard type="video" title="title" />
        <LibraryCard type="image" title="title" />
        <LibraryCard type="document" title="title" />
        <LibraryCard type="folder" title="title" />
        <LibraryCard type="folder" title="title" />
        <LibraryCard type="image" title="title" />
        <LibraryCard type="document" title="title" />
        <LibraryCard type="folder" title="title" />
        <LibraryCard type="folder" title="title" />
      </div>
      {/* <Table columns={mockColumns} data={mockData} canSelect /> */}
    </PageWrapper>
  );
}

export const mockColumns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Last Modified",
    accessor: "lastModified",
  },
  {
    Header: "Date Created",
    accessor: "dateCreated",
  },
  {
    Header: "Location",
    accessor: "location",
  },
];

export const mockData = [
  {
    name: "Colton Travers",
    class: "English",
    lastModified: "08/22/2022",
    dateCreated: "08/22/2022",
    location: "Here",
  },
  {
    name: "Angela Davis",
    class: "Math",
    lastModified: "02/15/2022",
    dateCreated: "02/12/2021",
    location: "There",
  },
  {
    name: "Colton Travers",
    class: "English",
    lastModified: "08/22/2022",
    dateCreated: "08/22/2022",
    location: "Here",
  },
  {
    name: "Angela Davis",
    class: "Math",
    lastModified: "02/15/2022",
    dateCreated: "02/12/2021",
    location: "There",
  },
];
