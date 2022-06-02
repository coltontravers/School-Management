import request, { gql } from "graphql-request";
import { useQuery, UseQueryOptions } from "react-query";
import { apiEndpoint } from "~/constants/api";
import { Groups } from "~/types";

type Response = Groups;

const fetchGroups = async () =>
  request<Response>(
    apiEndpoint,
    gql`
      query() {
        GetMessageGroups() {
          name
        }
      }
    `
  );

export const useGetMessageGroups = (params: Params, options?: Options) => {
  return useQuery<Response, Error>(
    ["messageGroups", params],
    fetchGroups,
    options
  );
};

type Options = UseQueryOptions<Groups, Error>;
interface Params {
  user: string;
}
