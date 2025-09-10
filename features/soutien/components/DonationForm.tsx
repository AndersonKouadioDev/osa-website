"use client"; // Indique que ce composant doit être exécuté côté client (Next.js 13+)

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as React from "react";

import {
  FormProvider,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { DataForSubmit } from "../types/data_for_submit";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DonationFooter from "@/components/soutien/DonationFooter";
import DonationHeader from "@/components/soutien/DonationHeader";


// Fonction utilitaire qui concatène les classes CSS en filtrant celles qui sont fausses/nulles
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

// Composant Label personnalisé
const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

// Raccourci : utilisation de FormProvider de react-hook-form
const Form = FormProvider;


// Définition d’un type générique pour le contexte des champs du formulaire
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};


export default function DonationForm() {
  // États locaux
  const [selectedAmount, setSelectedAmount] = useState(""); // montant choisi dans la liste prédéfinie
  const [customAmount, setCustomAmount] = useState(""); // montant libre saisi par l’utilisateur
  const [monthlyDonation, setMonthlyDonation] = useState(false); // don mensuel ou non
  const [acceptConditions, setAcceptConditions] = useState(false); // conditions générales acceptées

  // Initialisation du formulaire avec react-hook-form
  const form = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      dateNaissance: "",
      adresse: "",
      ville: "",
      pays: "Côte d'Ivoire", // valeur par défaut
    },
  });

  // Liste des montants proposés par défaut
  const predefinedAmounts = [
    "1 000 FCFA",
    "5 000 FCFA",
    "10 000 FCFA",
    "50 000 FCFA",
  ];

  // Fonction appelée à la soumission du formulaire
  const onSubmit = (data: DataForSubmit) => {
    console.log("Form data:", data);
    console.log("Selected amount:", selectedAmount || customAmount);
    console.log("Monthly donation:", monthlyDonation);
    console.log("Accept conditions:", acceptConditions);
  };

  return (
    <div className="mx-auto p-4 sm:p-6 w-full">
      <div className="bg-white rounded-3xl border border-primary overflow-hidden shadow-lg">
        
        {/* En-tête du formulaire */}
        <DonationHeader />

        {/* Contenu du formulaire */}
        <div className="px-4 py-6 sm:px-8 sm:py-6 lg:px-50 flex flex-col items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full flex flex-col"
            >
              {/* Liste des montants prédéfinis */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-between mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount(""); // reset du montant libre si on choisit un prédéfini
                    }}
                    className={`px-4 py-2 text-sm sm:px-6 sm:py-2 rounded-full border-2 transition-colors text-primary border-primary flex-grow sm:flex-grow-0 ${
                      selectedAmount === amount
                        ? "border-purple-500 bg-purple-50 text-purple-600"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Montant libre */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 justify-between">
                <label className="text-gray-700">Montant libre</label>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(""); // reset du montant prédéfini si saisie libre
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Option : don mensuel */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 justify-between">
                <span className="text-gray-700">Je donne tous les mois</span>
                <button
                  type="button"
                  onClick={() => setMonthlyDonation(!monthlyDonation)}
                  className={`w-12 h-6 rounded-full transition-colors self-end sm:self-center ${
                    monthlyDonation ? "bg-purple-500" : "bg-gray-400"
                  }`}
                >
                  {/* Bulle qui glisse selon l’état */}
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      monthlyDonation ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Message si don mensuel activé */}
              {monthlyDonation && (
                <div className="text-center text-gray-600 text-xs sm:text-sm">
                  Vous serez prélevé tous les{" "}
                  <input
                    className="w-8 border-b border-gray-300 text-center mx-1"
                    defaultValue="20"
                  />{" "}
                  de chaque mois.
                </div>
              )}

              {/* Info sur la validation bancaire */}
              <div className="bg-purple-100 rounded-lg p-4 text-xs sm:text-sm text-gray-700 text-center">
                Afin de valider votre carte bancaire, votre premier prélèvement
                sera effectué aujourd&apos;hui. 
                <br className="sm:hidden" />
                Le prochain aura lieu le{" "}
                <span className="font-semibold text-purple-600">
                  20 juillet 2025
                </span>.
              </div>

              {/* Champs du formulaire (nom, prénom, email, etc.) */}
              {[
                "nom",
                "prenom",
                "email",
                "dateNaissance",
                "adresse",
                "ville",
                "pays",
              ].map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof DataForSubmit}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                      </FormLabel>
                      <FormControl>
                        {fieldName === "pays" ? (
                          // Sélecteur de pays
                          <select
                            {...field}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-sm"
                          >
                            <option value="Côte d'Ivoire">
                              Côte d&apos;Ivoire
                            </option>
                            <option value="France">France</option>
                            <option value="Senegal">Sénégal</option>
                            <option value="Mali">Mali</option>
                          </select>
                        ) : (
                          // Input texte / email
                          <input
                            {...field}
                            type={fieldName === "email" ? "email" : "text"}
                            placeholder={
                              fieldName === "dateNaissance" ? "jj/mm/aaaa" : ""
                            }
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              {/* Case à cocher pour accepter les conditions */}
              <div className="flex justify-center">
                <label className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer text-left">
                  <input
                    type="checkbox"
                    checked={acceptConditions}
                    onChange={(e) => setAcceptConditions(e.target.checked)}
                    className="mt-1 w-4 h-4 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
                  />
                  <span>
                    J&apos;accepte les{" "}
                    <span className="font-semibold">
                      Conditions Générales d&apos;Utilisation
                    </span>{" "}
                    et j&apos;ai lu la{" "}
                    <span className="font-semibold">
                      Charte de confidentialité
                    </span>. *
                  </span>
                </label>
              </div>

              {/* Bouton de paiement */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-lg transition-colors"
              >
                Payer
              </button>
            </form>
          </Form>

          {/* Pied de page (paiement sécurisé, logos, etc.) */}
          <DonationFooter />
        </div>
      </div>
    </div>
  );
}
