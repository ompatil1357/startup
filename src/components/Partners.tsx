
export function Partners() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Trusted by Leading Companies
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="h-12 w-32 bg-muted/50 rounded-md flex items-center justify-center"
            >
              <div className="text-muted-foreground/70 font-semibold">Partner {i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
