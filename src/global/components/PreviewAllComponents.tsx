"use client";
import { componentVariants } from "@/data/component";
import { useRouter } from "next/navigation";
import { use } from "react"; // ✅ Import React.use()
import PreviewComponent from "@/common/PreviewComponent";
import { IComponent } from "@/types/IComponent";


const PreviewALlComponents = ({ params }: any) => {
  const router = useRouter();
  const resolvedParams = use(params); // ✅ Unwrap the Promise
  const componentKey = resolvedParams.component.toLowerCase();

  if (!componentVariants[componentKey]) {
    router.push("/404");
    return null;
  }

  const variants = componentVariants[componentKey];
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        {componentKey.toUpperCase()} Variants
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {variants?.map((variant: IComponent) => (
          <div
            key={variant.path}
            className="p-6 border rounded-lg shadow-lg view-component"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold mb-5">{variant.name}</h2>
              <button onClick={() => router.push(`/components/${resolvedParams?.component}/${variant.path}`)} className="bg-blue-500 px-3 py-2 text-white rounded-md">Code</button>

            </div>
            <PreviewComponent variant={variant} />
          </div>
        ))}
      </div>
    </div>

  )
}
export default PreviewALlComponents;
