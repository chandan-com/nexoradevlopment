import ServiceForm from "@/src/components/admin/services/ServiceForm";




export default function EditServicePage() {
  const service = {
    title: "Dynamic Website",
    slug: "dynamic-website",
    price: 35000,
    category: "Website",
    description: "Professional business website with admin panel.",
    popular: true,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Service
        </h1>

        <p className="text-muted-foreground">
          Update service details
        </p>
      </div>

      <ServiceForm initialData={service} />
    </div>
  );
}