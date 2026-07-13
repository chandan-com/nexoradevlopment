import PortfolioForm from "@/src/components/admin/portfolio/PortfolioForm";




export default function AddPortfolioPage() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Add Project
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new portfolio project.
        </p>
      </div>

      <PortfolioForm/>

    </section>
  );
}