import { FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Whitepaper() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <FileText className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-5xl font-bold">Whitepaper</h1>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">CRYPTOVAULT: A Stable Digital Asset for the Future</h2>
            <p className="text-muted-foreground mb-6">
              Version 1.0 - March 2024
            </p>
            <Button className="space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Full Whitepaper</span>
            </Button>
          </Card>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-semibold mb-4">Abstract</h3>
              <p className="text-muted-foreground">
                This whitepaper presents CRYPTOVAULT, a revolutionary digital asset designed to serve as a 
                stable store of value in an increasingly uncertain economic landscape. Through a combination 
                of algorithmic stability mechanisms, real-world asset backing, and democratic governance, 
                CRYPTOVAULT aims to provide a reliable alternative to traditional fiat currencies and volatile 
                cryptocurrencies.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Table of Contents</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Introduction</li>
                <li>Market Analysis</li>
                <li>Technical Architecture</li>
                <li>Stability Mechanisms</li>
                <li>Governance Model</li>
                <li>Token Economics</li>
                <li>Security Measures</li>
                <li>Roadmap</li>
                <li>Team and Advisors</li>
                <li>Conclusion</li>
              </ol>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
              <p className="text-muted-foreground mb-4">
                The global financial system faces unprecedented challenges, from persistent inflation to currency 
                devaluation. CRYPTOVAULT emerges as a solution to these challenges, offering a digital asset that 
                combines the benefits of blockchain technology with the stability of traditional financial instruments.
              </p>
              <p className="text-muted-foreground">
                This section outlines the fundamental principles behind CRYPTOVAULT and its role in the evolving 
                digital economy. We explore the core problems it addresses and the innovative solutions it brings 
                to the market.
              </p>
            </section>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                For the complete whitepaper, including detailed technical specifications, economic models, and 
                governance structures, please download the full document.
              </p>
              <Button size="lg" className="space-x-2">
                <Download className="h-4 w-4" />
                <span>Download Full Whitepaper</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;