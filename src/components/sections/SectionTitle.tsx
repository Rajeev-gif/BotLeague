interface Props {
  redTitle: string;
  whiteTitle: string;
}

const SectionTitle = ({ redTitle, whiteTitle }: Props) => {
  return (
    <div className="mb-10">
      <p className="uppercase text-red-500 tracking-[3px] font-semibold">
        {redTitle}
      </p>

      <h2 className="mt-2 text-4xl md:text-5xl font-bold uppercase text-white tracking-wide">
        {whiteTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
