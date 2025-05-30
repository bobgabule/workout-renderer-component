import Block from "./Block";

function Segment({ segment }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 p-5 rounded-2xl shadow-md h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{segment.title}</h2>
      <div className="space-y-3 flex-grow">
        {segment.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </div>
  );
}
export default Segment