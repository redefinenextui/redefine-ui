import Link from "next/link";


const components = [
  { name: "Buttons", path: "buttons" },
  { name: "Accordion", path: "accordion" },
  { name: "Cards", path: "cards" },
];

export default function ComponentsPage() {

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Available Components</h1>
      <div className="grid grid-cols-3 gap-6">
        {components.map((comp) => (
          <Link href={`/components/${comp?.path}`} key={comp?.path}>
            <div

              className="p-6 border rounded-lg shadow-lg cursor-pointer hover:bg-gray-100"
            >
              <h2 className="text-xl font-semibold">{comp.name}</h2>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

