export default function VariantDetailPage({
  params,
}: {
  params: { component: string; variant: string };
}) {
  const formattedVariant = params.variant
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">{formattedVariant}</h1>
      <div className="p-6 border rounded-lg shadow-lg">
        <p>Here is the {formattedVariant} demonstration.</p>
        {/* Add the actual UI component preview here */}
      </div>
    </div>
  );
}

