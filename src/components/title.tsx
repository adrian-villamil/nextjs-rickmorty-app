interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6 dark:text-lime-500">
      {title}
    </h1>
  );
};