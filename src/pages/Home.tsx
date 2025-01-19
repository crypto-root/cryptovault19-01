import { Coins, Globe, Users, Shield, Twitter, Disc as Discord, Instagram as Telegram, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Your Digital Fortress Against Inflation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                CRYPTOVAULT: A revolutionary digital asset designed to preserve wealth in an era of fiat currency uncertainty. Your secure haven in the digital economy.
              </p>
              <div className="flex space-x-4">
                <Button size="lg">Learn More</Button>
                <Button size="lg" variant="outline">Whitepaper</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-primary animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wealth Preservation</h3>
              <p className="text-muted-foreground">Protected against fiat currency devaluation through our innovative stability mechanism.</p>
            </Card>
            <Card className="p-6">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Asset-Backed Security</h3>
              <p className="text-muted-foreground">Backed by a strategic reserve of precious metals and stable assets.</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Democratic Governance</h3>
              <p className="text-muted-foreground">Community-driven decisions ensure transparency and stability.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How does CRYPTOVAULT protect against inflation?</AccordionTrigger>
                <AccordionContent>
                  CRYPTOVAULT maintains its value through a unique combination of precious metal backing, algorithmic stability mechanisms, and strategic asset reserves, providing a robust hedge against fiat currency depreciation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What makes CRYPTOVAULT different from traditional cryptocurrencies?</AccordionTrigger>
                <AccordionContent>
                  Unlike volatile cryptocurrencies or traditional stablecoins, CRYPTOVAULT is designed as a true store of value, backed by real-world assets and maintained through advanced economic models that ensure long-term stability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I participate in the CRYPTOVAULT ecosystem?</AccordionTrigger>
                <AccordionContent>
                  Join our presale to become an early adopter and participate in governance decisions. CRYPTOVAULT holders can vote on key decisions and benefit from our stability rewards program.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="space-x-2">
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2">
              <Discord className="h-5 w-5" />
              <span>Discord</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2">
              <Telegram className="h-5 w-5" />
              <span>Telegram</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;