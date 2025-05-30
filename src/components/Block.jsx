const DurationBlock = ({ block }) => (
  <div>
    <p className="font-medium text-gray-700 dark:text-gray-300">{block.render}</p>
    {block.note && <p className="text-sm italic text-gray-600 dark:text-gray-400">{block.note}</p>}
  </div>
);

const RestBlock = ({ block }) => (
  <p className="text-gray-600 dark:text-gray-400 font-semibold">{block.render}</p>
);

const SetBlock = ({ block }) => (
  <div>
    <p className="font-semibold text-gray-700 dark:text-gray-300">Reps: {block.reps}</p>
    <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
      {block.blocks.map((b, i) => (
        <li key={i}>{b.render}</li>
      ))}
    </ul>
  </div>
);

const Block = ({ block }) => {
  switch (block.type) {
    case "duration_interval":
      return <DurationBlock block={block} />;
    case "rest":
      return <RestBlock block={block} />;
    case "set":
      return <SetBlock block={block} />;
    default:
      return null;
  }
};

export default Block;