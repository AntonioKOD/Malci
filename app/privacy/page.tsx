import PageHeader from "@/components/page-header"
import MetaHead from "@/components/meta-head"

export default function PrivacyPage() {
  return (
    <>
       <MetaHead
        title="Privacy Policy"
        description="Malci Construction's privacy policy outlining how we collect, use, and protect your personal information."
        ogUrl="https://malciconstruction.com/privacy"
      />
    <main className="min-h-screen bg-slate-50">
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: May 1, 2023"
        backgroundImage="/placeholder.svg?key=privacy-header"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>
                Stonecraft Paving & Masonry (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or engage with our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <h3>Personal Data</h3>
              <p>
                When you interact with our website or services, we may collect personal information such as your name,
                email address, phone number, mailing address, and other information you voluntarily provide when you:
              </p>
              <ul>
                <li>Complete contact forms</li>
                <li>Request a quote or estimate</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us directly</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, our servers may automatically log standard data provided by your web
                browser. This may include your IP address, browser type and version, pages you visit, time and date of
                your visit, time spent on each page, and other details about your visit.
              </p>
              <p>
                We may also collect data about the device you are using to access our website, including hardware model,
                operating system and version, unique device identifiers, and mobile network information.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our services, updates, and other information</li>
                <li>Process transactions and send related information</li>
                <li>Find and prevent fraud</li>
                <li>For compliance with legal obligations</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations, including:</p>
              <h3>Business Transfers</h3>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition, or sale of all or a portion of our
                assets, your information may be transferred as part of that transaction.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party vendors, service providers, contractors, or agents who
                perform services for us or on our behalf and require access to such information to do that work.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information where we are legally required to do so in order to comply with
                applicable law, governmental requests, a judicial proceeding, court order, or legal process.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this page. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Stonecraft Paving & Masonry
                <br />
                123 Main Street
                <br />
                Fairfield, CT 06824
                <br />
                Phone: +1 (203) 888-4200
                <br />
                Email: info@stonecraftpaving.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
