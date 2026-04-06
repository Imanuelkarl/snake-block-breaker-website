// src/pages/TermsPage.jsx
const TermsPage = () => {
  const companyEmail = import.meta.env.VITE_COMPANY_EMAIL;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="game-card">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Effective: January 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or playing Snake Block Breaker, you agree to be bound
              by these Terms of Service. If you disagree with any part, please
              do not use our game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              2. License to Use
            </h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable license
              to play Snake Block Breaker for personal, non-commercial use. You
              may not modify, reverse engineer, or distribute any part of the
              game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              3. User Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Cheat, hack, or exploit the game in any way</li>
              <li>Harass other players or post inappropriate content</li>
              <li>Impersonate staff members or other players</li>
              <li>Use automated bots or scripts to play</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              4. Intellectual Property
            </h2>
            <p>
              All game content, including graphics, sound effects, code, and
              "Snake Block Breaker" trademark, is owned by us or our licensors.
              Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              5. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms, without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              6. Disclaimer of Warranties
            </h2>
            <p>
              The game is provided "as is" without warranties of any kind. We
              don't guarantee uninterrupted or error-free gameplay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, we aren't liable for any
              indirect damages arising from your use of Snake Block Breaker.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              8. Changes to Terms
            </h2>
            <p>
              We may update these terms periodically. Continued use of the game
              constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              9. Contact
            </h2>
            <p>
              Questions? Email:{" "}
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

export default TermsPage;
