'use client';

import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const statuses = ['', 'all', 'alive', 'dead', 'unknown'];

export const StatusSelect = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get('status')?.toString() ?? '';
  const pathname = usePathname();
  const { replace } = useRouter();

  const isStatusIncluded = statuses.includes(status);

  if (!isStatusIncluded) {
    notFound();
  }
  
  const handleChange = (value: string) => {
    const query = value === 'all' ? '' : value;
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (query) {
      params.set('status', query);
    } else {
      params.delete('status');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      onValueChange={handleChange}
      defaultValue={status}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="alive">Alive</SelectItem>
        <SelectItem value="dead">Dead</SelectItem>
        <SelectItem value="unknown">Unknown</SelectItem>
      </SelectContent>
    </Select>
  );
};