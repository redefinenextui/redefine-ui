import CodeEditor from "@/common/CodeEditor";
import { componentVariants } from "@/data/componentsCode";

export default function VariantDetailPage({
  params,
}: {
  params: { component: string; variant: string };
}) {


  const allVariants = Object.values(componentVariants).flat(); // Convert object values into a single array

  const filterCode = allVariants.filter(
    (code) => code?.path === params?.variant
  );

  return (
    <div className="">
      <CodeEditor code={filterCode[0]} />
    </div>
  );
}

