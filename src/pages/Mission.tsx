import { Shield, Coins, Scale } from 'lucide-react';
import { Card } from "@/components/ui/card";

function Mission() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Mission</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-muted-foreground text-center mb-12">
            CRYPTOVAULT was born from a vision to create a truly stable digital asset that serves as a refuge 
            from the inherent vulnerabilities of traditional fiat currencies. Our mission is to provide a secure, 
            transparent, and accessible store of value for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8">
            <Shield className="h-16 w-16 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Protection</h3>
            <p className="text-muted-foreground text-center">
              Safeguarding wealth against inflation and economic uncertainty through innovative stability mechanisms 
              and real-world asset backing.
            </p>
          </Card>

          <Card className="p-8">
            <Coins className="h-16 w-16 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Stability</h3>
            <p className="text-muted-foreground text-center">
              Maintaining value through a sophisticated blend of algorithmic controls and strategic reserves, 
              ensuring consistent purchasing power.
            </p>
          </Card>

          <Card className="p-8">
            <Scale className="h-16 w-16 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Transparency</h3>
            <p className="text-muted-foreground text-center">
              Operating with complete openness in our governance and reserve management, building trust through 
              verifiable systems.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision for the Future</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We envision a world where financial stability is accessible to everyone, regardless of their 
            geographic location or economic status. CRYPTOVAULT aims to be the bridge between traditional 
            finance and the digital future, offering:
          </p>
          <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-4">
            <li>A reliable store of value that maintains purchasing power over time</li>
            <li>Democratic governance that gives voice to all stakeholders</li>
            <li>Transparent operations with regular audits and real-time reporting</li>
            <li>Innovative stability mechanisms that adapt to market conditions</li>
            <li>Global accessibility through decentralized networks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mission;