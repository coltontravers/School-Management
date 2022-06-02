import { css, tw } from "twind/css";
import { Dropdown } from "~/components/Dropdown";
import { Button } from "~/components/inputs/Button";
import { TextInput } from "~/components/inputs/TextInput";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { Text } from "~/components/Text";
import { SchoolPost } from "~/components/school/SchoolPost";
import { SchoolEvent } from "~/components/school/SchoolEvent";
import { Tabs } from "~/components/inputs/Tabs";

const posts = [
  {
    title: "Title here",
    body: "Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something. Post about something.",
  },
];

const events = [
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
  {
    title: "Parade",
    description: "Some kind of event.",
    date: new Date(),
  },
];

const nameShadow = css`
  text-shadow: 2px 2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    -2px -2px 0 black, 2px 0px 0 black, 0px 2px 0 black;
`;

const tabs = [
  {
    value: "home",
    label: "Home",
  },
  { value: "sign-in", label: "Sign in" },
];

export default function MySchool() {
  return (
    <PageWrapper padding={0}>
      <div
        className={tw`bg-cover bg-no-repeat bg-center h-20 w-full`}
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/R.a0600876b91bd7163eee00a1404bb022?rik=1ORbRG%2fuwWx3Qw&riu=http%3a%2f%2fcamcongroup.com%2fwp-content%2fuploads%2f2018%2f03%2fheader-columbus_wellness_center.jpg&ehk=qow8r0vJwxaZO8o0tiRmAI1K%2frPg9jnlzLJI9gDR7Jw%3d&risl=&pid=ImgRaw&r=0)",
        }}
      ></div>
      <Flexbox justifyContent="spaceBetween">
        <Text size="h1">St Martin High School</Text>
        <Tabs tabs={tabs} defaultActiveTab="home" />
      </Flexbox>
      <Flexbox className={tw`p-5 gap-8 flex-col lg:flex-row`}>
        <Flexbox className={tw`flex-1`}>
          {posts.map((post, i) => {
            return <SchoolPost {...post} key={`${post.title}-${i}`} />;
          })}
        </Flexbox>
        <Flexbox
          className={tw`flex-1 w-full lg:w-2/5`}
          direction="column"
          gap={3}
        >
          <Text size="h4" weight="bold">
            Upcoming Events
          </Text>
          <Flexbox gap={5} wrap="wrap">
            {events.map((event, i) => {
              return <SchoolEvent {...event} key={`${event.title}-${i}`} />;
            })}
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </PageWrapper>
  );
}
