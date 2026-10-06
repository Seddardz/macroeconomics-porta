import Catalogue from "@/components/Catalogue";
export default function Lectures() {
  return (
    <Catalogue
      title="Lectures"
      desc="Course PDFs, newest first."
      initialType="lecture"
    />
  );
}
