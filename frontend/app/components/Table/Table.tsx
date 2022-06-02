import { Icon } from "@iconify/react";
import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useTable, useSortBy, useRowSelect } from "react-table";
import { css, tw } from "twind/css";
import { Checkbox } from "../inputs/Checkbox";

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: object[];
  canSelect?: boolean;
}

interface IndeterminateInputProps {
  indeterminate?: boolean;
  name: string;
}

const mobileStyles = css`
  @media only screen and (max-width: 1000px) {
    table {
      display: flex;
    }

    tbody {
      display: flex;
      overflow: auto;
    }

    thead tr,
    tbody tr {
      display: flex;
      flex-direction: column;
    }
  }
`;

const IndeterminateCheckbox = forwardRef<
  HTMLInputElement,
  IndeterminateInputProps
>(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef<HTMLInputElement>(null);
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    const refCast = (ref as MutableRefObject<HTMLInputElement>)?.current;

    if (refCast) {
      refCast.indeterminate = indeterminate ?? false;
    }
  }, [resolvedRef, indeterminate]);

  return <Checkbox forwardedRef={resolvedRef} {...rest} />;
});

// TODO: Add an actions column
export const Table = ({ columns, data, canSelect }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      canSelect &&
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox
                  {...getToggleAllRowsSelectedProps()}
                  name="select-column"
                />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox
                  {...row.getToggleRowSelectedProps()}
                  name="select-column"
                />
              </div>
            ),
          },
          ...columns,
        ]);
    }
  );

  console.log({
    selectedRowIds,
    og: selectedFlatRows.map((column) => column.original),
  });

  return (
    <div className={tw("w-full", mobileStyles)}>
      <table className={tw`table-auto w-full`} {...getTableProps()}>
        <thead className={tw`bg-gray-100 border border-b-gray-300`}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={tw`p-2 text-left`}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon
                          icon="akar-icons:arrow-down"
                          className={tw`inline`}
                        />
                      ) : (
                        <Icon
                          icon="akar-icons:arrow-up"
                          className={tw`inline`}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className={tw`p-2`}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
