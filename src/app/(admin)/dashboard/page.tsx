'use client'
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { Table } from "lucide-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type User = {
  id: number;
  name: string;
  gender: string;
  age: number;
  dob: string;
  email: string;
  phone: string;
};

const data: User[] = [
  {
    id: 1,
    name: "Leaphea Lim",
    gender: "Female",
    age: 19,
    dob: "2000-01-01",
    email: "leaphea@example.com",
    phone: "099 123 456",
  },
  {
    id: 2,
    name: "Sam Sokun Sreypich",
    gender: "Female",
    age: 24,
    dob: "2000-05-20",
    email: "alex@example.com",
    phone: "088 777 888",
  },
  {
    id: 3,
    name: "Heng Liza",
    gender: "Female",
    age: 27,
    dob: "1997-10-04",
    email: "dara@example.com",
    phone: "085 555 444",
  },
];

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "gender", header: "Gender" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "dob", header: "Date of Birth" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phone", header: "Phone Number" },
  {
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex gap-2">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => alert(`Edit user ${user.id}`)}
          >
            <FaRegEdit className="w-5 h-5" />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => alert(`Delete user ${user.id}`)}
          >
            <MdDeleteOutline className="w-5 h-5" />
          </button>
        </div>
      );
    },
  },
];

export default function AdminDashboard() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - User List</h1>
      <table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
}
