import React from 'react';

const Imprint = () => {
    return (
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Imprint</h1>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
                <p>nAIxt Technologies GmbH</p>
                <p>Am Forst 2</p>
                <p>82166 Gräfelfing</p>
                <p className="mt-4">Registered office of the company: Gräfelfing</p>
                <p>Managing Director: Jonas Szalanczi</p>
                <p>Registry court: Munich Local Court</p>
                <p>Registration number: HRB 284095</p>
                <p className="mt-4">
                    Responsible for content according to § 55 II RStV: Jonas Szalanczi (address see above)
                </p>
                <p className="mt-4">VAT number: DE361509699</p>
                <p className="mt-4">
                    Dispute resolution: We are not prepared or obliged to participate in dispute resolution
                    proceedings before a consumer arbitration board.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
                <p>Tel: +49 8954196515</p>
                <p>Email: <a href="mailto:info@naixt-technologies.de" className="text-[#010C80]">info@naixt-technologies.de</a></p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Unternehmensangaben</h2>
                <p>nAIxt Technologies GmbH</p>
                <p>Am Forst 2</p>
                <p>82166 Gräfelfing</p>
                <p className="mt-4">Sitz der Gesellschaft: Gräfelfing</p>
                <p>Geschäftsführer: Jonas Szalanczi</p>
                <p>Registergericht: Amtsgericht München</p>
                <p>Registernummer: HRB 284095</p>
                <p className="mt-4">
                    Inhaltlich Verantwortlicher gem. § 55 II RStV: Jonas Szalanczi (Anschrift s.o.)
                </p>
                <p className="mt-4">USt-IdNr.: DE361509699</p>
                <p className="mt-4">
                    Streitschlichtung: Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
                <p>Tel: +49 8954196515</p>
                <p>Email: <a href="mailto:info@naixt-technologies.de" className="text-[#010C80]">info@naixt-technologies.de</a></p>
            </section>
        </div>
    );
};

export default Imprint;
