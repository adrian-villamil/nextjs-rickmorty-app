'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input"

export const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const getPlaceholder: Record<string, string> = {
    '/characters': 'character',
    '/locations': 'location',
    '/episodes': 'episode',
  };

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (value) {
      params.set('name', value);
    } else {
      params.delete('name');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="text"
      defaultValue={searchParams.get('search')?.toString()}
      onChange={(event) => handleChange(event.target.value)}
      placeholder={`Search ${getPlaceholder[pathname]} by name...`}
    />
  );
}
