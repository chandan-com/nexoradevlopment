import TechnologyForm from "@/src/components/admin/technologies/TechnologyForm";




export default function AddTechnologyPage() {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Add Technology
        </h1>

        <p className="mt-2 text-muted-foreground">
          Add a technology to display on your website.
        </p>

      </div>

      <TechnologyForm/>

    </section>
  );
}