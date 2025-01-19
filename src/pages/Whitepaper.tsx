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
            <h2 className="text-2xl font-semibold mb-4">CRYPTOVAULT: A Revolutionary Memecoin</h2>
            <p className="text-muted-foreground mb-6">
              Version 1.0 - January 2025
            </p>
            <Button className="space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Full Whitepaper</span>
            </Button>
          </Card>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
              <p className="text-muted-foreground">
                CRYPTO Vault is a revolutionary memecoin designed to provide investors with a safe haven against inflation and volatility. By combining advanced economic principles, community-driven growth, and cutting-edge AI technology, we aim to redefine how cryptocurrency holders preserve and grow their wealth in a volatile market.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
              <p className="text-muted-foreground">
                Our mission is to empower individuals to achieve financial stability and freedom in the crypto world. By leveraging the power of community and technology, CRYPTO Vault offers a comprehensive solution that ensures transparency, security, and profitability for all stakeholders.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Community Building Objectives</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Telegram:</strong> Daily updates, AMAs, and interactive community polls.</li>
                <li><strong>Twitter:</strong> Viral campaigns, educational threads, and airdrop announcements.</li>
                <li><strong>Discord:</strong> Specialized discussion channels, live events, and rewards programs.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Tokenomics</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Total Supply: 1 billion CRYPTO Vault tokens</li>
                <li><strong>Fair Launch:</strong> 100% distributed on Pump.fun</li>
                <li><strong>Allocation:</strong></li>
                <ul className="list-disc pl-6">
                  <li>Community Sale: 70%</li>
                  <li>Team and Development: 15% (locked for 12 months)</li>
                  <li>Liquidity Pool: 10%</li>
                  <li>Marketing and Partnerships: 5%</li>
                </ul>
                <li><strong>Transaction Fees:</strong> None (fee-free within the ecosystem)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Release Plan</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Q1:</strong> Token launch, community building, and website launch.</li>
                <li><strong>Q2:</strong> Staking functionality, stability fund implementation, and global marketing.</li>
                <li><strong>Q3:</strong> AI Agent beta release and integration with Telegram/Discord.</li>
                <li><strong>Q4:</strong> Full AI integration, major exchange listings, and cross-chain compatibility.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Future Roadmap: AI Agent for Investment Timing</h3>
              <p className="text-muted-foreground">
                The cornerstone of our innovation is the development of an AI-powered investment agent. This tool will:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Analyze market trends and predict optimal investment timings.</li>
                <li>Offer personalized strategies for staking, trading, and portfolio management.</li>
                <li>Provide real-time alerts and actionable insights through Telegram, Discord, and a dedicated web portal.</li>
              </ul>
              <p className="text-muted-foreground">
                Our AI will continuously evolve through machine learning, integrating feedback from the community to ensure its effectiveness and relevance.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
              <p className="text-muted-foreground">
                CRYPTO Vault is not just another memecoin; it is a movement. By combining economic stability, cutting-edge AI, and the power of community, we aim to create a resilient financial ecosystem that empowers every investor. Together, we can conquer inflation, volatility, and uncertainty\u2014and usher in a new era of wealth preservation and growth.
              </p>
              <p className="text-muted-foreground font-semibold">
                Join us on this journey.
              </p>
            </section>
            <section>
              <p className="text-muted-foreground font-semibold">
                Join us on this journey!🚀🚀🚀
              </p>
            </section>
            <div className="text-center">
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
