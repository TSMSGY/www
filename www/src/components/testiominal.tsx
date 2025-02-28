import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TestimonialType } from "@/static/testimonials";

export const Testimonial: React.FC<TestimonialType> = ({
  quote,
  author,
  title,
  avatarUrl,
}) => {
  return (
    <Card className="shadow-lg rounded-md shadow-border/50 border-2 font-zig bg-muted/50">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center space-x-4">
          <img
            src={avatarUrl}
            alt={author}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">{author}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <blockquote className="leading-relaxed italic">
          <p>
            {quote}
          </p>
        </blockquote>
      </CardContent>
    </Card>
  );
};
