// src/pages/PrivacyPage.jsx
const PrivacyPage = () => {
  const companyEmail = import.meta.env.VITE_COMPANY_EMAIL;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="game-card">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last updated: January 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              1. Information We Collect
            </h2>
            <p>
              Snake Block Breaker collects minimal information to provide and
              improve our game experience. This may include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Game progress and high scores</li>
              <li>
                Device information, including browser type, OS version, and
                device identifiers
              </li>
              <li>
                Approximate location information, which may be used to provide
                and personalize advertisements
              </li>
              <li>Anonymous usage statistics and activity metrics</li>
              <li>Optional email if you create an account for leaderboards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              2. How We Use Your Information
            </h2>
            <p>We use collected data to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Save your game progress and preferences</li>
              <li>Improve game performance and features</li>
              <li>Display global leaderboards</li>
              <li>
                Provide, measure, and personalize advertisements based on
                approximate location and device information
              </li>
              <li>Send occasional game updates (with your permission)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              3. Cookies and Tracking
            </h2>
            <p>
              We use essential cookies to remember your game settings and
              authentication status. Google Play services and third-party
              advertising or analytics providers may collect information such as
              device identifiers, approximate location, and usage data to
              provide, measure, and personalize ads and to help us understand
              how players interact with the game. You can manage available ad
              personalization and device privacy settings through your device or
              Google account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              5. Children's Privacy
            </h2>
            <p>
              Snake Block Breaker is suitable for all ages. We do not knowingly
              collect personal information from children under 13 without
              parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              6. Contact Us
            </h2>
            <p>
              For privacy concerns, reach us at:{" "}
              <a
                href={`mailto:${companyEmail}`}
                className="text-green-400 hover:underline"
              >
                {companyEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
