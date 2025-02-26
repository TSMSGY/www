import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";


interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string; // Optional avatar image URL
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  title,
  avatarUrl,
}) => {
  return (
    <Card className="shadow-lg rounded-xl overflow-hidden border-none font-zig bg-muted/50">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center space-x-4">
          {avatarUrl ? (
            <div className="flex items-center justify-center w-12 h-12 rounded-full object-cover bg-background/60 shadow-md p-2">
              <User />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
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
