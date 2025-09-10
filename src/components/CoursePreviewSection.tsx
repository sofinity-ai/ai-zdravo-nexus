import CourseCarousel from "@/components/CourseCarousel";
import { mockCourses } from "@/data/mockData";

const CoursePreviewSection = () => {
  // Filter courses for marketing preview - remove progress and make all accessible
  const marketingCourses = mockCourses.slice(0, 5).map(course => ({
    ...course,
    progress: undefined,
    isLocked: false
  }));

  return (
    <section className="py-24 bg-muted/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Istraži Naše Kurseve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praktični kursevi kreirani od strane lokalnih AI eksperata za brže usvajanje znanja
          </p>
        </div>

        <CourseCarousel 
          title="" 
          courses={marketingCourses}
          showFilters={false}
        />
      </div>
    </section>
  );
};

export default CoursePreviewSection;