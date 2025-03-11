import { PageHero } from '../components/layout/PageHero';
import { DonationImpact } from '../components/donation/DonationImpact';
import { DonationTrust } from '../components/donation/DonationTrust';
import { DonateButton } from '../components/shared/DonateButton';

export function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Transform Lives Today"
        description="Your generosity creates opportunities that change young lives forever. Every donation makes a difference."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <DonationImpact />
          <div className="flex justify-center py-12">
            <DonateButton
              href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB"
              size="lg"
              className="w-full max-w-md"
            />
          </div>
          <DonationTrust />
        </div>
      </div>
    </div>
  );
}