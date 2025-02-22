"use client";
import { useRouter } from "next/navigation";
import { use } from "react"; // ✅ Import React.use()
import ComponentsPreview from "@/data/ComponentsPreview";
import { IComponentPreview } from "@/types/IComponent";
import Link from "next/link";


const PreviewALlComponents = ({ params }: any) => {
  const router = useRouter();
  const resolvedParams = use(params); // ✅ Unwrap the Promise
  const componentKey = resolvedParams.component.toLowerCase();
  const allComponents = ComponentsPreview()

  if (!allComponents[componentKey]) {
    router.push("/404");
    return null;
  }

  const variants = allComponents[componentKey];
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">
        {componentKey.toUpperCase()} Variants
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {variants?.map((variant: IComponentPreview) => (
          <div key={variant?.path} className="border shadow-md rounded-md p-4 w-full h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{variant?.name}</h2>
              <Link target="_blank" href={`/editor?variant=${variant?.path}`} className="text-white bg-sky-500 px-4 py-2 rounded-md">Code</Link>
            </div>
            <div className="border rounded-md w-full h-[300px] flex items-center justify-center overflow-y-auto">
              <div>

                {variant?.code}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
export default PreviewALlComponents;
