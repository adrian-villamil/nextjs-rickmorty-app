'use client';

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface Props {
  className: string;
}

export const NavBar = ({ className }: Props) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} size={'icon'}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={'/characters'}>
            <DropdownMenuItem>
              Characters
            </DropdownMenuItem>
          </Link>
          <Link href={'/locations'}>
            <DropdownMenuItem>
              Locations
            </DropdownMenuItem>
          </Link>
          <Link href={'/episodes'}>
            <DropdownMenuItem>
              Episodes
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};