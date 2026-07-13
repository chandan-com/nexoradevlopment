import ServiceForm from "@/src/components/admin/services/ServiceForm";



export default function AddServicePage() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Add Service
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new service package.
        </p>
      </div>

      <ServiceForm/>

    </section>
  );
}