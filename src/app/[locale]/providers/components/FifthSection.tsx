import Image from "next/image";

const Card = ({ imgSrc }: { imgSrc: string }) => (
  <div className="w-[100%] h-[280] p-2 border-2">
    <Image src={imgSrc} width={330} height={263} alt="massage app" />
  </div>
);

export default function FifthSection() {
  const ImageSrcs = [
    "/providers/image 3 (8).png",
    "/providers/image 3 (9).png",
    "/providers/image 3 (10).png",
  ];
  return (
    <div className="grid grid-cols-12 my-10">
      <div className="col-start-2 col-end-12  grid grid-cols-1 sm:grid-cols-3 gap-10">
        {ImageSrcs.map((src, key) => (
          <Card imgSrc={src} key={key} />
        ))}
      </div>
    </div>
  );
}
