"use client";

import Image from 'next/image'

import { SideSheet } from "@/components/sheet";
import { Eye, FilePenLine } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DeleteConfirmation } from "@/components/delete/delete-form";
import { EditPatient } from "../patient-edit-form";
import { ViewPatient } from "../patient-view-form";
import { RowActionDetailProps } from "@/types";


export function PatientRowActions<TData>({
  row,
  title,
  description,
}: RowActionDetailProps<TData>) {
  // const task = taskSchema.parse(row.original);

  return (
    <div className="flex flex-col lg:flex-row">
      <SideSheet
        icon={<Eye />}
        title={title}
        description={description}
        className="w-full"
        trigger={
          <Image src="/icons/view.svg" alt="view" className="flex h-6 w-6 justify-center cursor-pointer" width={20} height={20} />
        }
      >
        <ScrollArea className='h-full w-[360px]'>
          <ViewPatient
            row={row}
          />
        </ScrollArea>
      </SideSheet>
      <SideSheet
        icon={<FilePenLine />}
        title={title}
        description={description}
        className="w-full"
        trigger={
          <Image src="/icons/edit.svg" alt="edit" className="flex h-5 w-5 justify-center cursor-pointer" width={20} height={20} />
        }
      >
        <ScrollArea className='h-full w-[360px]'>
          <EditPatient
            row={row}
          />
        </ScrollArea>
      </SideSheet>
      <DeleteConfirmation
        eventId={row.getValue("id")}
        name={row.getValue("name")}
        classname="flex h-14 w-14 justify-center"
      />

    </div>
  );
}