'use client';

import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const genders = ['', 'all', 'female', 'male', 'genderless', 'unknown'];

export const GenderSelect = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender') ?? '';
  const pathname = usePathname();
  const { replace } = useRouter();

  const isGenderIncluded = genders.includes(gender);

  if (!isGenderIncluded) {
    notFound();
  }

  const handleChange = (value: string) => {
    const query = value === 'all' ? '' : value;
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (query) {
      params.set('gender', query);
    } else {
      params.delete('gender');
    }

    replace(`${pathname}?${params.toString()}`);
  };


  return (
    <Select
      onValueChange={handleChange}
      defaultValue={gender}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="female">Female</SelectItem>
        <SelectItem value="male">Male</SelectItem>
        <SelectItem value="genderless">Genderless</SelectItem>
        <SelectItem value="unknown">Unknown</SelectItem>
      </SelectContent>
    </Select>
  );
};