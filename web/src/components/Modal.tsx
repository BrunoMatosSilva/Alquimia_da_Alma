import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogContent } from "./ui/dialog";

interface ModalProps {
  title: string
  open: boolean;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  onClose?(): void;
}

export function Modal({ open, children, title, rightAction, onClose }: ModalProps) {
  return(
    <Dialog
    open={open}
    onOpenChange={onClose}
    >
       <DialogContent
       className="w-full max-w-[400px] bg-background"
       >
        <header className="h-12 flex items-center justify-between">
          <button
          className="h-12 w-12 flex items-center justify-center outline-none"
          onClick={onClose}
          >
            <Cross2Icon className="w-6 h-6" />
          </button>

          <span className="text-lg tracking-[-1px] font-bold">
            {title}
          </span>

          <span className="h-12 w-12 flex items-center justify-center">
            {rightAction}
          </span>
        </header>
        <div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}