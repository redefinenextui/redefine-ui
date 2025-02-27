import PreviewALlComponents from "@/global/components/PreviewAllComponents";

export default function ComponentDetailPage({
  params,
}: {
  params: Promise<{ component: string }>; // ✅ Mark params as a Promise
}) {



  return <PreviewALlComponents params={params} />
}

