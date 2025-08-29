"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Label
const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`block text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ""}`}
    {...props}
  />
))
Label.displayName = "Label"

// Input
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Button
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2 w-full"

  const variants = {
    default: " text-white hover:bg-primary/90",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false)

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Données du formulaire:", data)
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md border border-gray-200 p-6 sm:p-8">
        {/* Titre */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Connectez-vous</h1>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Champ Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "L'adresse email est requise",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse email invalide",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Adresse email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="exemple@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Champ Mot de passe */}
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Le mot de passe est requis",
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Mot de passe</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Votre mot de passe"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mot de passe oublié */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Mot de passe oublié ?
              </a>
            </div>

            {/* Boutons */}
            <div className="space-y-3">
              <Button type="submit"  className="bg-[#FFC107]">
                Connexion
              </Button>

              <Button type="button" variant="outline">
                Créer un compte
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
