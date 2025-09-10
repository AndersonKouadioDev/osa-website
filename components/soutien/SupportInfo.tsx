export default function SupportInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* Section Pourquoi nous soutenir */}
        <section>
          <h1 className="text-primary text-2xl font-bold mb-4">
            Pourquoi nous soutenir ?
          </h1>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Lorsqu'on s'appelle le FC OSA, qu'on est un club engagé, source de rêve, de motivation et d'espoir pour toute une jeunesse, notre action 
              compte. Le FC OSA, enraciné dans la commune d'Abobo, porte une responsabilité sociale forte envers les populations locales et en particulier 
              les enfants.
            </p>
            
            <p>
              C'est pourquoi nous avons fait le choix de concevoir et mettre en œuvre nos propres projets sociaux et éducatifs, d'agir directement sur le 
              terrain, et de faire appel à votre générosité pour amplifier notre impact et aider encore plus de jeunes.
            </p>
            
            <p>
              Que ce soit <span className="font-bold">1 000, 5 000, 10 000 FCFA</span> ou plus, chaque don est important.
            </p>
            
            <p>
              L'intégralité des dons collectés sera directement reversée au Fonds de développement du FC OSA, qui finance nos initiatives en faveur des 
              enfants et jeunes en difficulté sociale, éducative ou sanitaire.
            </p>
          </div>
        </section>

        {/* Section Notre mission */}
        <section>
          <h2 className="text-primary text-2xl font-bold mb-4">
            Notre mission :
          </h2>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Offrir aux jeunes qui n'ont pas les mêmes chances de départ l'opportunité de croire en eux, de se construire et de s'épanouir à travers le 
              sport, l'éducation et l'engagement communautaire.
            </p>
            <p>
              Chaque année, nous menons des dizaines de projets qui touchent directement des centaines de jeunes à Abobo et dans ses environs.
            </p>
          </div>
        </section>

        {/* Section Plafond pour les dons */}
        <section>
          <h2 className="text-primary text-2xl font-bold mb-4">
            Y a-t-il un plafond pour les dons ?
          </h2>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Au-delà d'un don annuel supérieur à 1 500 000 FCFA, des vérifications complémentaires seront effectuées pour respecter les exigences en 
              matière de transparence. N'hésitez pas à nous contacter pour faciliter le processus.
            </p>
          </div>
        </section>

        {/* Section Respect de la vie privée */}
        <section>
          <h2 className="text-primary text-2xl font-bold mb-4">
            Respect de votre vie privée
          </h2>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Vos coordonnées sont nécessaires à l'émission de votre reçu et pour vous informer des actions concrètes rendues possibles grâce à vous. Le 
              Fonds de développement du FC OSA s'engage à ne jamais partager vos informations personnelles avec des tiers sans votre accord.
            </p>
            <p>
              En conformité avec la législation ivoirienne sur la protection des données, vous pouvez exercer vos droits à tout moment en écrivant à : 
              <br />
              <a href="mailto:dpo@fcosa.ci" className="text-primary underline hover:text-purple-800">
                dpo@fcosa.ci
              </a>
            </p>
          </div>
        </section>

        {/* Message de remerciement final */}
        <section className="bg-purple-100 rounded-lg p-6 text-center">
          <p className="text-gray-800 text-lg font-semibold">
            Merci infiniment pour votre soutien. Ensemble, faisons grandir les talents d'Abobo !
          </p>
        </section>
      </div>
    </div>
  );
}