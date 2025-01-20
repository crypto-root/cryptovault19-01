import { Globe, Users, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

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
                CRYPTOVAULT AI: A groundbreaking Agent crypto-asset designed to safeguard wealth in a volatile economic landscape. With the power of community-driven innovation and our advanced AI Agent. Join the movement and become part of the community shaping the future of digital finance.
              </p>
              <div className="flex space-x-4">
              <a href="https://pump.fun/coin/D5rhLTWL3Moh9FoHRbssE4uVuHNYGYfPg5iWZ7z8pump" target="_blank" rel="noopener noreferrer">
                <Button variant="default">Buy $VAULT</Button>
              </a>
                <Button size="lg" variant="outline">
                  <Link to="/whitepaper" className="text-sm font-medium transition-colors hover:text-primary">
                    Whitepaper
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mb-8 flex justify-center">
              <div className="aspect-square flex w-1/2 rounded-full bg-gradient-to-tr from-primary/20 to-primary animate-pulse">
                <img className="aspect-square rounded-full w-full" src="https://pbs.twimg.com/profile_images/1880351121190920192/Mh55MDbT_400x400.jpg" alt="image"></img>
              </div>
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
                  Join our launch to become an early adopter and participate in governance decisions. CRYPTOVAULT holders can vote on key decisions and benefit from our stability rewards program.
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
            <Button onClick={() => window.open("https://x.com/CryptoVaultHODL", "_blank", "noopener,noreferrer")} variant="outline" size="lg" className="space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1.5em' height='1.5em'><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/></svg>
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.5em' height='1.5em'><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
              <span>SOON!</span>
            </Button>
            <Button onClick={() => window.open("https://t.me/+IUW5eNUmTBA1ZDY0", "_blank", "noopener,noreferrer")} variant="outline" size="lg" className="space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1.5em' height='1.5em'><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"/></svg>
              <span>Telegram</span>
            </Button>
            <Button onClick={() => window.open("https://x.com/CryptoVaultHODL", "_blank", "noopener,noreferrer")} variant="outline" size="lg" className="space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M13.302 3.525a5.071 5.071 0 1 1 7.172 7.172l-9.778 9.778a5.071 5.071 0 0 1-7.172-7.172zm6.111 1.061a3.57 3.57 0 0 0-5.05 0l-4.359 4.359l5.05 5.05l4.36-4.359a3.57 3.57 0 0 0 0-5.05m-8.606 13.691a.75.75 0 0 0-1.06-1.06l-1.441 1.44a1.5 1.5 0 0 1-2.1.022l-.017-.016a.75.75 0 1 0-1.039 1.082l.017.016a3 3 0 0 0 4.2-.043z"/></svg>
              <span>Pump.fun</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;