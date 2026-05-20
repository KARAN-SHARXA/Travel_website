import Layout from '@/components/layout/Layout';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT } from '@/lib/contact';

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="mx-auto mb-4 text-primary" size={48} />
          <h1 className="text-4xl font-bold font-display">Privacy Policy</h1>
          <p className="text-cream/80 mt-4 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold font-display">Information We Collect</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  When you book a trip with us, we collect information necessary to provide our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Name and contact details (phone, email)</li>
                  <li>Travel preferences and booking details</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication records for customer support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold font-display">How We Use Your Information</h2>
                </div>
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Process and manage your bookings</li>
                  <li>Communicate with you about your trips</li>
                  <li>Provide customer support and assistance</li>
                  <li>Improve our services and user experience</li>
                  <li>Send important updates about your bookings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold font-display">Data Protection</h2>
                </div>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessible to authorized personnel. We do not sell or share your personal information with third parties except as necessary to provide our services (such as vehicle operators) or as required by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold font-display">Your Rights</h2>
                </div>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold font-display mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> {CONTACT.email}</p>
                  <p><strong>Phone:</strong> {CONTACT.phoneDisplay}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This privacy policy may be updated from time to time. We will notify you of any significant changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
