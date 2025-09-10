"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import Image from 'next/image';

// Utility function for className merging
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

// Label component
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

// Form components
const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-red-500", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-gray-600 text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) return null;

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-red-500 text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

// Main donation form component
export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [monthlyDonation, setMonthlyDonation] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);

  const form = useForm({
    defaultValues: {
      nom: '',
      prenom: '',
      email: '',
      dateNaissance: '',
      adresse: '',
      ville: '',
      pays: "Côte d'Ivoire",
    },
  });

  const predefinedAmounts = ['1 000 FCFA', '5 000 FCFA', '10 000 FCFA', '50 000 FCFA'];

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    console.log('Selected amount:', selectedAmount || customAmount);
    console.log('Monthly donation:', monthlyDonation);
    console.log('Accept conditions:', acceptConditions);
  };

  return (
 <div className="mx-auto p-4 sm:p-6   w-full">
  <div className="bg-white rounded-3xl border border-primary  overflow-hidden shadow-lg">
    {/* Header */}
    <div className="bg-white px-4 pt-6 pb-4 sm:px-8 flex flex-col items-center">
      <h1 className="text-purple-600 text-3xl sm:text-4xl font-bold tracking-wide text-center">
        FAIRE UN DON
      </h1>
    </div>

    {/* Yellow banner */}
    <div className="bg-yellow-400 py-3 px-4 sm:py-4 sm:px-8 flex flex-col items-center">
      <h2 className="text-black text-lg sm:text-xl font-semibold text-center">
        Mon don pour le club
      </h2>
    </div>

    {/* Form content */}
    <div className="px-4 py-6 sm:px-8 sm:py-6 lg:px-50 flex flex-col items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full flex flex-col">
          {/* Montants prédéfinis */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-between mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`px-4 py-2 text-sm sm:px-6 sm:py-2 rounded-full border-2 transition-colors text-primary border-primary flex-grow sm:flex-grow-0 ${
                  selectedAmount === amount
                    ? 'border-purple-500 bg-purple-50 text-purple-600'
                    : 'border-gray-300 hover:border-purple-300'
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
                setSelectedAmount('');
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Don mensuel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 justify-between">
            <span className="text-gray-700">Je donne tous les mois</span>
            <button
              type="button"
              onClick={() => setMonthlyDonation(!monthlyDonation)}
              className={`w-12 h-6 rounded-full transition-colors self-end sm:self-center ${
                monthlyDonation ? 'bg-purple-500' : 'bg-gray-400'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  monthlyDonation ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

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

          {/* Info */}
          <div className="bg-purple-100 rounded-lg p-4 text-xs sm:text-sm text-gray-700 text-center">
            Afin de valider votre carte bancaire, votre premier prélèvement sera
            <br className="sm:hidden" />
            effectué aujourd'hui. Le prochain aura lieu le{" "}
            <span className="font-semibold text-purple-600">
              20 juillet 2025
            </span>.
          </div>

          {/* Champs du formulaire */}
          {["nom", "prenom", "email", "dateNaissance", "adresse", "ville", "pays"].map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                  <FormControl>
                    {fieldName === "pays" ? (
                      <select
                        {...field}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-sm"
                      >
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="France">France</option>
                        <option value="Senegal">Sénégal</option>
                        <option value="Mali">Mali</option>
                      </select>
                    ) : (
                      <input
                        {...field}
                        type={fieldName === "email" ? "email" : "text"}
                        placeholder={fieldName === "dateNaissance" ? "jj/mm/aaaa" : ""}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Conditions */}
          <div className="flex justify-center">
            <label className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer text-left">
              <input
                type="checkbox"
                checked={acceptConditions}
                onChange={(e) => setAcceptConditions(e.target.checked)}
                className="mt-1 w-4 h-4 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
              />
              <span>
                J'accepte les <span className="font-semibold">Conditions Générales d'Utilisation</span> du service et j'ai lu la
                <br className="sm:hidden" />
                <span className="font-semibold">Charte de confidentialité</span>. *
              </span>
            </label>
          </div>

          {/* Bouton payer */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-lg transition-colors"
          >
            Payer
          </button>
        </form>
      </Form>

      {/* Paiement sécurisé */}
      <div className="text-center text-xs sm:text-sm text-gray-600 mt-6">
  <div className="mb-2 font-semibold">Paiement sécurisé</div>
  <div className="flex justify-center items-center gap-4 flex-wrap">
    {/* KiePay */}
    <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
      <Image
        src="/Assets/images/all-img/LogoKKi.jpeg"
        alt="KiePay"
        width={60}
        height={20}
        className="object-contain"
      />
    </div>

    {/* Visa */}
    <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
      <Image
        src="/Assets/images/all-img/LogoVisa.jpeg"
        alt="Visa"
        width={80}
        height={40}
        className="object-contain"
      />
    </div>

    {/* MasterCard */}
    <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
      <Image
        src="/Assets/images/all-img/LogoMasterCard.jpeg"
        alt="MasterCard"
        width={60}
        height={40}
        className="object-contain"
      />
    </div>
  </div>
</div>


    </div>
  </div>
</div>

  );
}
