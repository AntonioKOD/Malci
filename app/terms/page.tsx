import PageHeader from "@/components/page-header"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: May 1, 2023"
        backgroundImage="/placeholder.svg?key=terms-header"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by Malci Construction
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) and any services offered through the website. By accessing or using our website,
                you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the
                website.
              </p>

              <h2>Use of Website</h2>
              <p>
                The content on our website is for general information and use only. It is subject to change without
                notice. Your use of any information or materials on this website is entirely at your own risk, for which
                we shall not be liable.
              </p>
              <p>
                This website may include content provided by third parties, including materials provided by other users,
                bloggers, and third-party licensors. All statements and/or opinions expressed in these materials, and
                all articles and responses to questions and other content, other than the content provided by us, are
                solely the opinions and the responsibility of the person or entity providing those materials.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The website and its original content, features, and functionality are owned by Malci Construction and are protected by international copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our website, except as follows:
              </p>
              <ul>
                <li>
                  Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                  viewing those materials.
                </li>
                <li>
                  You may store files that are automatically cached by your Web browser for display enhancement
                  purposes.
                </li>
                <li>
                  You may print or download one copy of a reasonable number of pages of the website for your own
                  personal, non-commercial use and not for further reproduction, publication, or distribution.
                </li>
              </ul>

              <h2>User Contributions</h2>
              <p>
                The website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin
                boards, and other interactive features that allow users to post, submit, publish, display, or transmit
                to other users or other persons content or materials on or through the website.
              </p>
              <p>
                All User Contributions must comply with the Content Standards set out in these Terms. Any User
                Contribution you post to the site will be considered non-confidential and non-proprietary.
              </p>

              <h2>Content Standards</h2>
              <p>
                These content standards apply to any and all User Contributions and use of Interactive Services. User
                Contributions must in their entirety comply with all applicable federal, state, local, and international
                laws and regulations.
              </p>
              <p>Without limiting the foregoing, User Contributions must not:</p>
              <ul>
                <li>
                  Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent,
                  hateful, inflammatory, or otherwise objectionable.
                </li>
                <li>
                  Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex,
                  religion, nationality, disability, sexual orientation, or age.
                </li>
                <li>
                  Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other
                  rights of any other person.
                </li>
                <li>
                  Violate the legal rights (including the rights of publicity and privacy) of others or contain any
                  material that could give rise to any civil or criminal liability under applicable laws or regulations.
                </li>
                <li>Be likely to deceive any person.</li>
                <li>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</li>
                <li>
                  Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, alarm, or annoy
                  any other person.
                </li>
                <li>
                  Impersonate any person, or misrepresent your identity or affiliation with any person or organization.
                </li>
                <li>
                  Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions,
                  barter, or advertising.
                </li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Malci Construction, nor its directors, employees, partners, agents,
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from:
              </p>
              <ul>
                <li>Your access to or use of or inability to access or use the website;</li>
                <li>Any conduct or content of any third party on the website;</li>
                <li>Any content obtained from the website; and</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
                  contract, tort (including negligence), or any other legal theory, whether or not we have been informed
                  of the possibility of such damage.
                </li>
              </ul>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Malci Construction, its affiliates,
                licensors, and service providers, and its and their respective officers, directors, employees,
                contractors, agents, licensors, suppliers, successors, and assigns from and against any claims,
                liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable
                attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the website.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of Connecticut,
                without regard to its conflict of law provisions. Our failure to enforce any right or provision of these
                Terms will not be considered a waiver of those rights.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By
                continuing to access or use our website after those revisions become effective, you agree to be bound by
                the revised terms.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Malci Construction
                <br />
                Phone: +1 (929) 536-4063
                <br />
                Email: malciconstruction@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}