"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function InscriptionForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nom: "",
      prenom: "",
      dateNaissance: "",
      telephone: "",
      adresse: "",
      ville: "",
      pays: "Côte d'Ivoire",
      newsletter: false,
    },
  });

  const onSubmit = (data: any) => console.log(data);

  // Fonction pour rendre une section avec le nouveau format (reverted to 5 arguments)
  const renderSection = (
    number: number,
    title: string,
    description: string,
    topInput: React.ReactNode,
    bottomInputs: React.ReactNode
  ) => (
    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
      {/* Colonne gauche - Titre et description */}
      <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
            {number}
          </div>
          <h2 className="text-lg font-semibold text-primary">{title}</h2>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Colonne droite - Contenu du formulaire */}
      <div className="md:w-2/3 space-y-4">
        {/* Premier input en haut */}
        {topInput}

        {/* Deux inputs du bas */}
        {bottomInputs}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full bg-white rounded-lg shadow-lg p-15">
        {/* Titre général */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Inscriptions</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

            {/* --- Compte Section --- */}
            {renderSection(
              1,
              "Compte",
              "Choisissez votre adresse email et votre mot de passe.",
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-gray-700">Adresse email</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-gray-300 rounded-md p-2" />
                    </FormControl>
                  </FormItem>
                )}
              />,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Confirmer mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* --- Identité Section --- */}
            {renderSection(
              2,
              "Identité",
              "Vos informations personnelles.",
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Nom</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Prénom</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateNaissance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Date de naissance</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* --- Adresse Section --- */}
            {renderSection(
              3,
              "Adresse",
              "Votre adresse de facturation et de livraison.",
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="adresse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Adresse</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="ville"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Ville</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 rounded-md p-2" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-700">Pays</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 rounded-md p-2 cursor-pointer">
                            <SelectValue placeholder="Côte d'Ivoire" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Côte d'Ivoire">Côte d&apos;Ivoire</SelectItem>
                          <SelectItem value="Ghana">Ghana</SelectItem>
                          <SelectItem value="Mali">Mali</SelectItem>
                          <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Newsletter Checkbox */}
            <div className="flex items-center lg:justify-center space-x-2">
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-600">
                      Je souhaite recevoir l&apos;actualité du club
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {/* Buttons */}
            <div className="space-y-3 lg:flex lg:flex-col lg:px-96 ">
              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg cursor-pointer"
              >
                S&apos;inscrire
              </Button>

              <Link href="/connexion" className="text-sm text-gray-600 hover:text-gray-800">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 font-semibold py-3  rounded-lg cursor-pointer"
                >
                  Se connecter
                </Button>
              </Link>


            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
